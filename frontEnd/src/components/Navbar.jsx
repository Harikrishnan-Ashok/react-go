import styled from "styled-components";

const Nav = styled.div`
	display:flex;
	justify-content:space-around;
	padding:16px;
	box-shadow:0 1px 3px -2px black;
`;

const NavLogo = styled.div`
	display:flex;
	align-items:center;
	gap:10px;
`;
const Text = styled.p`
	color:#171717;
	font-size:38px;
	font-weight:600px;
`;
const NavMenu = styled.ul`
	display:flex;
	align-items:center;
	gap:50px;
	list-style:none;
	color:#626262;
	font-size:20px;
	font-weight:500;
`;
const Item = styled.li`
	display:flex;
	flex-direction:column;
	gap:3px;
	justify-content:center;
	cursor:pointer;
`;
const LoginKart= styled.div`
	display:flex;
	align-items:center;
	gap:45px;
`;
const Button = styled.button`
  width: 157px;
  height: 58px;
  outline: none;
  border: solid #7a7a7a;
  border-radius: 75px;
  font-size: 20px;
  color: #515151;
  font-weight: 500;
  background: white;
  cursor: pointer;

  &:active {
    background: #f0f0f0; 
  }
`;
const KartCount = styled.div`
	width:22px;
	height:22px;
	display:flex;
	justify-content:center;
	align-Items:center;
	margin-top:-35px;
	margin-left:-55px;
	border-radius:11px;
	color:white;
	background:red;
`;

import shop from "./assets/bag.png"
import kart from "./assets/store.png"
import {useState} from "react";

export default function Navbar()
{
	const [menu,setMenu]=useState("shop")
	return(<>
		<Nav>
			<NavLogo>
				<img style={{width: "50px", height: "50px"}} src={shop} alt="icon here" />
				<Text>POTS KADA</Text>
			</NavLogo>
			<NavMenu>

			<Item onClick={() => setMenu("shop")}>Shop
				{menu === "shop" && (
					<hr style={{border: "none", height: "3px", backgroundColor: "#ff4141", width: "80%", borderRadius: "3px"}} />)}
			</Item>
			<Item onClick={() => setMenu("women")}>women
				{menu === "women" && (
					<hr style={{border: "none", height: "3px", backgroundColor: "#ff4141", width: "80%", borderRadius: "3px"}} />)}
			</Item>
			<Item onClick={() => setMenu("men")}>men
				{menu === "men" && (
					<hr style={{border: "none", height: "3px", backgroundColor: "#ff4141", width: "80%", borderRadius: "3px"}} />)}
			</Item>
			<Item onClick={() => setMenu("kids")}>kids
				{menu === "kids" && (
					<hr style={{border: "none", height: "3px", backgroundColor: "#ff4141", width: "80%", borderRadius: "3px"}} />)}
			</Item>
			</NavMenu>
			<LoginKart>
				<img style={{width: "50px", height: "50px"}} src={kart} alt="icon here" />
				<KartCount>0</KartCount>
				<Button>Login</Button>
			</LoginKart>
		</Nav>
	</>);
}
