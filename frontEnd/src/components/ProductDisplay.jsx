import styled from "styled-components";

const Container=styled.div`
	display:flex;
	margin:0px 170px;
`;
const Left=styled.div`
	display:flex;
	gap:17px;
`;
const ImageList=styled.div`
	display:flex;
	flex-direction:column;
	gap: 16px;
`;
const Right=styled.div`
	margin:0px 17px;
	display:flex;
	flex-direction:column;
`;
const H=styled.h1`
	color:#3d3d3d;
	font-size:40px;
	font-weight:700px;
`;
const Star=styled.div`
	display:flex;
	align-items:center;
	margin-top:13px;
	gap:5px;color:#1c1c1c;
	font-size:16px;

`;
const P=styled.div``;
const Prices=styled.div`
	display:flex;
	margin:40px 0px;
	gap:30px;
	font-size:24px;
	font-weight:700px;
	`;
const OldPrice=styled.div`
	color:#818181;
	text-decoration:line-through;
`;
const NewPrice=styled.div`
	color:#ff4141;

`;
const H2=styled.h1`
	margin-top:55px;
	font-size:20px;
	color: #656565;
	font-weight:600px;
`;
const SizeContainer=styled.div``;
const SizeDiv=styled.div`
	padding:18px 24px;
	background:#fbfbfb;
	border:1px solid #ebebeb;
	border-radius:10px;
	cursor:pointer;
`;
const Sizes=styled.div`
	display:flex;
	margin:30px 0px;
	gap:20px;
	
`;
const Desc=styled.div``;
const Button=styled.button`
	padding:20px 40px;
	width:200px;
	font-size:16px;
	font-weight:600;
	color:white;
	margin-bottom:40px;
	background:#FF4141;
	border:none;
	outline:none;
	cursor:pointer;
	border-radius:15px;

`;
const Category=styled.div`
	margin-top:10px;
`;

import star_icon from "../components/assets/star_icon.png"
import star_dull_icon from "../components/assets/star_dull_icon.png"
import {useContext} from "react";
import {ShopContext} from "../context/ShopContext";
export default function ProductDisplay(props)
{
	const {product}=props;
	const {addToKart}=useContext(ShopContext)
	return(<>
		<Container>
			<Left>
				<ImageList>
					<img style={{height:"163px" }} src={product.image} alt=""></img>
					<img style={{height:"163px" }} src={product.image} alt=""></img>
					<img style={{height:"163px" }} src={product.image} alt=""></img>
					<img style={{height:"163px" }} src={product.image} alt=""></img>
				</ImageList>
				<img style={{width:"586px",height:"700px"}} src={product.image}></img>
			</Left>
			<Right>
				<H>{product.name}</H>
				<Star>
					<img src={star_icon}></img>
					<img src={star_icon}></img>
					<img src={star_icon}></img>
					<img src={star_icon}></img>
					<img src={star_dull_icon}></img>
					<P>(122)</P>
				</Star>
				<Prices>
					<OldPrice>${product.old_price}</OldPrice>
					<NewPrice>${product.new_price}</NewPrice>
				</Prices>
				<Desc>
					onnu poda vettavaliya descriptionum vayichoidn iricathe
				</Desc>
				<SizeContainer>
					<H2>Select Size</H2>
					<Sizes>
						<SizeDiv>S</SizeDiv>
						<SizeDiv>M</SizeDiv>
						<SizeDiv>L</SizeDiv>
						<SizeDiv>XL</SizeDiv>
						<SizeDiv>XXL</SizeDiv>
					</Sizes>
				</SizeContainer>
				<Button onClick={()=>{addToKart(product.id)}}>Add to Kart</Button>
				<Category><span style={{fontWeight:"600"}} >Category:</span>Women,Tshirt,CropTop</Category>
				<Category><span style={{fontWeight:"600"}}>Tags:</span>Mordern,Latest</Category>
			</Right>
		</Container>
	</>);
}
