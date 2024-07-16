import styled from "styled-components";

const Container=styled.div``;
const P=styled.p``;
const Input=styled.input``;
const ProductPrice=styled.div``;
const ProductItemFeild=styled.div``;
const Select=styled.select``;
const Label=styled.label``;
const Img=styled.img``;
const Button=styled.button``;

import upload_area from "../assets/upload_area.png"
export default function AddProduct()
{
	return(<Container>
		<P>Product Title</P>
		<Input type="text" name="name" placeholder="Type Here..."></Input>
		<ProductPrice>
			<ProductItemFeild>
				<P>Price</P>	
				<Input type="text" name="old_price" placeholder="Type Here..."></Input>
			</ProductItemFeild>
			<ProductItemFeild>
				<P>Price On Offer</P>	
				<Input type="text" name="new_price" placeholder="Type Here..."></Input>
			</ProductItemFeild>
			<ProductItemFeild>
				<P>Category</P>
				<Select name="category">
					<option value="women">Women</option>
					<option value="men">Men</option>		
					<option value="kid">Kid</option>
				</Select>
			</ProductItemFeild>
		</ProductPrice>
		<ProductItemFeild>
			<Label htmlFor="file-input">
				<Img src={upload_area}></Img>
			</Label>
			<Input type="file" name="image" id="file-input" hidden></Input>
		</ProductItemFeild>
		<Button>ADD</Button>
	</Container>);
}
