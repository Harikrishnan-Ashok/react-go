import styled from "styled-components";
import exclusive_image from "./assets/exclusive_image.png"

const OffersContainer=styled.div`
	width:65%;
	height:60vh;
	display:flex;
	margin:auto;
	padding:0px 140px;
	margin-bottom:150px;
	background:linear-gradient(180deg,#fde1ff 0%, #e1ffea22 60%);
`;
const OfferLeft=styled.div`
	flex:1;
	display:flex;
	flex-direction:column;
	justify-content:center;
`;
const H=styled.h1`
	color:#171717;
	font-size:80px;
	font-weight:600;
`;
const P=styled.p`
	color:#171717;
	font-size:22px;
	font-weight:600;
`;
const Button=styled.button`
	width:282px;
	height:70px;
	border-radius:35px;
	background-color:#ff4141;
	border:none;
	color:white;
	font-size:22px;
	font-weight:500;
	margin-top:30px;
	cursor: pointer;
`;
const OfferRight=styled.div`
	flex:1;
	display:flex;
	align-items:center;
	justify-content:flex-end;
	padding-top:50px;
`;

export default function Offers()
{
	return(<>
		<OffersContainer>
			<OfferLeft>
				<H>Exclusive</H>
				<H>For You</H>
				<P>ONLY ON BESTSELLERS PRODUCT</P>
				<Button>Check Now</Button>
			</OfferLeft>
			<OfferRight>
				<img src={exclusive_image} alt=""></img>
			</OfferRight>
		</OffersContainer>	
	</>);
}
