const port = 4000;

const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path")
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// database conenction with mongo db 
mongoose.connect("mongodb+srv://potbeater:Pots-Kada@cluster0.jjcdaab.mongodb.net/test");

//API Creation
app.get("/", (req, res) => {
	res.send("express is running")
})

const storage = multer.diskStorage({
	destination: "./upload/images",
	filename: (req, file, callback) => {
		return callback(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
	}
})

const upload = multer({ storage: storage })

// Creating upload endpoint
app.use("/images", express.static("upload/images"))

app.post("/upload", upload.single("product"), (req, res) => {
	res.json({
		success: 1,
		image_url: `http://localhost:${port}/images/${req.file.filename}`
	})
})

//schema for product model
const Product = mongoose.model("Product", {
	id: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	new_price: {
		type: Number,
		required: true,
	},
	old_price: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	avilable: {
		type: Boolean,
		default: true,
	},
})

app.post("/addproduct", async (req, res) => {
	let products = await Product.find({})
	let id;
	if (Product.length > 0) {
		let last_product_array = products.slice(-1);
		let last_product = last_product_array[0];
		id = last_product.id + 1;
	}
	else {
		id = 1;
	}
	const product = new Product({
		id: id,
		name: req.body.name,
		image: req.body.image,
		category: req.body.category,
		new_price: req.body.new_price,
		old_price: req.body.old_price,
	});
	console.log(product)
	await product.save();
	console.log("Saved succesfully");
	res.json({
		success: true,
		name: req.body.name,
	})
})

//removing products
app.post("/removeProduct", async (req, res) => {
	await Product.findOneAndDelete({ id: req.body.id });
	console.log("removed")
	res.json({
		success: "true",
		name: req.body.name
	})
})

// createing api for getting all producs
app.get("/allproducts", async (req, res) => {
	let products = await Product.find({})
	console.log("all product featched")
	res.send(products);
})

app.listen(port, (error) => {
	if (!error) {
		console.log("SERVER ODI KUTTA :" + port)
	}
	else {
		console.log(error)
	}
})

//schema for user model
const Users = mongoose.model("Users", {
	name: {
		type: String,
	},
	email: {
		type: String,
		unique: true
	},
	password: {
		type: String,
	},
	kart: {
		type: Object
	},
	date: {
		type: Date,
		default: Date.now,
	}
})

// endpoint for registering user

app.post("/signup", async (req, res) => {
	try {
		let check = await Users.findOne({ email: req.body.email });
		if (check) {
			return res.status(400).json({ success: false, error: "existing user found with same email address !!" });
		}

		let kart = {};
		for (let i = 0; i < 300; i++) {
			kart[i] = 0;
		}

		const user = new Users({
			name: req.body.username,
			email: req.body.email,
			password: req.body.password,
			kartData: kart,
		});

		await user.save();

		// for jwt authentication
		const data = {
			user: {
				id: user.id
			}
		};

		const token = jwt.sign(data, "secert_ecom");
		res.json({ success: true, token });
	} catch (error) {
		console.error("Error in signup:", error);
		res.status(500).json({ success: false, error: "Internal server error" });
	}
});

//endpoint for user login
app.post("/login", async (req, res) => {
	let user = await Users.findOne({ email: req.body.email })
	if (user) {
		const passCompare = req.body.password === user.password
		if (passCompare) {
			const data = {
				user: {
					id: user.id
				}
			}
			const token = jwt.sign(data, "scecrt_ecom")
			res.json({ success: true, token })
		}
		else {
			res.json({ success: false, errors: "Worng Password" })
		}
	}
	else {
		res.json({ success: false, errors: "Wrong Email ID" })
	}

})

