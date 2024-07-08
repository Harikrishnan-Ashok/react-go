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


app.listen(4000,(error)=>{
	if (!error){
		console.log("SERVER ODI KUTTA :"+port)
	}
	else
	{
		console.log(error)
	}
})
