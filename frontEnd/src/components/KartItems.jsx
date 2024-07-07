import styled from "styled-components";

const Container=styled.div`
	margin:100px 170px;
`;
const Main=styled.div`
	display:grid;
	grid-template-columns:0.5fr 2fr 1fr 1fr 1fr 1fr;
	align-items:center;
	gap:75px;
	padding:20px 0px;
	color:#454545;
	font-size:18px;
	font-weight:600;

`;
const P=styled.div`
	color:#555;
`;
const Format=styled.div`
	display:grid;
	grid-template-columns:0.5fr 2fr 1fr 1fr 1fr 1fr;
	align-items:center;
	gap:75px;
	padding:20px 0px;
	color:#454545;
	font-size:17px;
	font-weight:500;
`;
const Button=styled.button`
	width:64px;
	height:50px;
	border:2px solid #ebebeb;
	background:#fff;

`;
const Down=styled.div`
	display:flex;
	margin:100px 0px;
`;
const Total=styled.div`
	flex:1;
	display:flex;
	flex-direction:column;
	margin-right:200px;
	gap:40px;
`;
const H=styled.div``;
const TotalItem=styled.div`
	display:flex;
	justify-content:space-between;
	padding: 15px 0px;
`;
const Button2=styled.button`
	width:262px;
	outline:none;
	border:none;
	background:#ff5a5a;
	height:58px;
	color:#fff;
	font-size:16px;
	font-weight:500;
	cursor: pointer;
`;
const Promobox=styled.div`
	width:504px;
	margin-top:15px;
	padding-left:20px;
	height:58px;
	background:#eaeaea;
`;
const PromoCode=styled.div`
	flex:1;
	font-size:15px;
	font-weight:500;
`;
const Button3=styled.button`
	height:58px;
	width:170px;
	font-size:16px;
	background:black;
	color:white;
	cursor: pointer;
	border-radius:10px;
`;

import {useContext} from "react";
import {ShopContext} from "../context/ShopContext";

import remove_icon from "../components/assets/cart_cross_icon.png"
export default function KartItems()
{
	const {all_product,kartItem,removeFromKart,getTotal}= useContext(ShopContext)
	return(
		<Container>
			<Main>
				<P>Products</P>
				<P>Title</P>
				<P>Price</P>
				<P>Quantity</P>
				<P>Total</P>
				<P>Remove</P>
			</Main>
			<hr style={{height:"3px", background:"#e2e2e2", border:"0"}}></hr>
			{all_product.map((e)=>{
				if(kartItem[e.id]>0)
				{
					return(
						<div>
							<Format>
								<img style={{height:"62px"}} src={e.image}></img>
								<P>{e.name}</P>
								<P>${e.new_price}</P>
								<Button>{kartItem[e.id]}</Button>
								<P>${e.new_price*kartItem[e.id]}</P>
								<img style={{width:"15px", margin:"0px 40px", cursor:"pointer"}} src={remove_icon} onClick={()=>{removeFromKart(e.id)}}></img>
							</Format>
					
							<hr style={{height:"3px", background:"#e2e2e2", border:"0"}}></hr>
						</div>)
				}
				return null;
			})}			
			<Down>
				<Total>
					<H>KartTotal</H>
					<div>
						<TotalItem>
							<P>Subtotal</P>
							<P>{getTotal()}</P>
						</TotalItem>
						<hr style={{height:"3px", background:"#e2e2e2", border:"0"}}></hr>
						<TotalItem>
							<P>Shipping Fee</P>
							<P>Free</P>
						</TotalItem>
						<hr style={{height:"3px", background:"#e2e2e2", border:"0"}}></hr>
						<TotalItem>
							<h3>Total</h3>
							<h3></h3>
						</TotalItem>
					</div>
					<Button2>Proceed to Checkout</Button2>
				</Total>
				<PromoCode>
					<P>If You have a PROMOCODE enter it here</P>
					<Promobox>
						<input style={{ borderRadius:"15px",border:"none", outline:"none", background:"transparent", fontSize:"16px",width:"330px",height:"50px"}} placeholder="promocode.."></input>
						<Button3>Submit</Button3>
					</Promobox>
				</PromoCode>
			</Down>
		</Container>
	);
}
