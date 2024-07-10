const port = 4000;

const express = require("express");
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const multer=require("multer");
const path = require("path")
const cors= require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// database conenction with mongo db 
mongoose.connect("mongodb+srv://potbeater:Pots-Kada@cluster0.jjcdaab.mongodb.net/test");

//API Creation
app.get("/",(req,res)=>{
	res.send("express is running")
})

const storage = multer.diskStorage({
	destination:"./upload/images",
	filename:(req, file, callback)=>{
		return callback(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
	}
})

const upload=multer({storage:storage})

// Creating upload endpoint
app.use("/images",express.static("upload/images"))

app.post("/upload",upload.single("product"),(req,res)=>{
	res.json({
		success:1,
		image_url:`http://localhost:${port}/images/${req.file.filename}`
	})
})


app.listen(port,(error)=>{
	if (!error){
		console.log("SERVER ODI KUTTA :"+port)
	}
	else
	{
		console.log(error)
	}
})
