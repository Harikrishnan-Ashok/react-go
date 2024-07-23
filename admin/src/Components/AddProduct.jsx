import styled from "styled-components";

const Container=styled.div`
	box-sizing:border-box;
	width:100%;
	max-width:800px;
	padding:30px 50px;
	margin:20px 30px;
	border-radius:6px;
	background:white;
`;
const P=styled.p``;
const Input=styled.input`
	box-sizing:border-box;
	width:100%;
	height:50px;
	border-radius:4px;
	padding-left:58px;
	border:1px solid #c3c3c3;
	outline:none;
	color:#7b7b7b;
	font-size:14px;
`;
const ProductPrice=styled.div`
	display:flex;
	gap:40px;
`;
const ProductItemFeild=styled.div`
	width:100%;
	color:#7b7b7b;
	font-size:16px;
`;
const Select=styled.select`
	padding:10px;
	width:100px;
	height:50px;
	font-size:14px;
	color:#7b7b7b;
	border:1px solid #7b7b7b;
	background:#fff
`;
const Label=styled.label``;
const Img=styled.img`
	height:100px;
	width:100px;
	border-radius:10px;
	object-fit:contain;
	margin:10px 0px;
`;
const Button=styled.button`
	margin-top:20px;
	width:160px;
	height:60px;
	border-radius:6px;
	background:#6079ff;
	border:none;
	color:whit;
	font-size:16px;
	font-weight:500;
	cursor: pointer;
`;

import upload_area from "../assets/upload_area.png"
import {useState} from "react";
export default function AddProduct()
{
	const [image,setImage]=useState(false)
	const [productDeat,setProductDeat]=useState({
		name:"",
		image:"",
		category:"women",
		new_price:"",
		old_price:""
	})
	
	function handleImage(e){
		setImage(e.target.files[0])
	}
	
	function handleProductDeat(e)
	{
		setProductDeat({...productDeat,[e.target.name]:e.target.value})
	}

	async function addProduct() {
		let responseData;
		let product = productDeat; // Ensure `productDeat` is defined and correct

		let formData = new FormData();
		formData.append("product", image); // Ensure `image` is defined

		// Upload the image
		 await fetch("http://localhost:4000/upload", {
		 method: "POST",
			headers: {
			Accept: "application/json",
		},
		body: formData,
	}).then((res) => res.json()).then((data) => {
      responseData = data;
    });

		// Check if image upload was successful
		if (responseData.success) {
		product.image = responseData.image_url;
		console.log(product);

		// Add the product
		await fetch("http://localhost:4000/addproduct", {
		method: "POST",
		headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        data.success ? alert("Product Added") : alert("Failed");
      });
  }
}

	return(
		<Container>
			<ProductItemFeild>
				<P>Product Title</P>
				<Input type="text" name="name" value={productDeat.name} onChange={handleProductDeat} placeholder="Type Here..."></Input>
			</ProductItemFeild>
			<ProductPrice>
				<ProductItemFeild>
					<P>Price</P>	
					<Input type="text" name="old_price" value={productDeat.old_price} onChange={handleProductDeat} placeholder="Type Here..."></Input>
				</ProductItemFeild>
				<ProductItemFeild>
					<P>Price On Offer</P>	
					<Input type="text" name="new_price" value={productDeat.new_price} onChange={handleProductDeat} placeholder="Type Here..."></Input>
				</ProductItemFeild>
			</ProductPrice>
			<ProductItemFeild>
				<P>Category</P>
				<Select name="category" value={productDeat.category} onChange={handleProductDeat}>
					<option value="women">Women</option>
					<option value="men">Men</option>		
					<option value="kid">Kid</option>
				</Select>
			</ProductItemFeild>
		<ProductItemFeild>
			<Label htmlFor="file-input">
				<Img src={image?URL.createObjectURL(image):upload_area}></Img>
			</Label>
			<Input onChange={handleImage} type="file" name="image" id="file-input" hidden></Input>
		</ProductItemFeild>
		<Button onClick={()=>{addProduct()}} >ADD</Button>
	</Container>);
}
