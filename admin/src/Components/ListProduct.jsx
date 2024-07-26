import { useState, useEffect } from "react";
import styled from "styled-components";
const Container = styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	width:100%;
	height:40px;
	padding:10px 50px;
	margin: 30px;
	border-radius:6px;
	background:white;

`;
const H1 = styled.h1``;
const MainFormat = styled.div`
	display:grid;
	grid-template-columns:1fr 3fr 1fr 1fr 1fr 1fr;
	gap:10px;
	width:100%;
	padding:20px 0px;
	color:#454545;
	font-size:15px;
	font-weight:600;
`;
const P = styled.p``;
const ListProductFormatMain = styled.div`
	display:grid;
	align-items:center;
	grid-template-columns:1fr 3fr 1fr 1fr 1fr 1fr;
	gap:10px;
	width:100%;
	padding:20px 0px;
	color:#454545;
	font-size:15px;
	font-weight:500;
`;
const ListAllProducts = styled.div``;
const ProductIcon = styled.img`
	height:80px;
`;
export default function ListProduct() {
	const [allproducts, Setallproducts] = useState([])

	async function fetchInfo() {
		await fetch("http://localhost:4000/allproducts").then((res) => res.json()).then((data) => { Setallproducts(data) })
	}
	async function removeProduct(id) {
		await fetch("http://localhost:4000/removeProduct", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			}, body: JSON.stringify({ id: id })
		})
		await fetchInfo()
	}

	useEffect(() => {
		fetchInfo()
	}, [])
	return (
		<Container>
			<H1>All Product List</H1>
			<MainFormat>
				<P>Products</P>
				<P>Title</P>
				<P>Old Price</P>
				<P>New Price</P>
				<P>Category</P>
				<P>Remove</P>
			</MainFormat>
			<ListAllProducts>
				<hr></hr>
				{allproducts.map((product, index) => {
					return <><ListProductFormatMain key={index}>
						<ProductIcon src={product.image} ></ProductIcon>
						<P>{product.name}</P>
						<P>{product.old_price}</P>
						<P>{product.new_Price}</P>
						<P>{product.category}</P>
						<P onClick={() => { removeProduct(product.id) }} style={{ margin: "auto", cursor: "pointer", color: "red" }}>X</P>
					</ListProductFormatMain>
						<hr></hr>
					</>
				})}
			</ListAllProducts>
		</Container>);
}
