import {Link} from "react-router-dom";
import styled from "styled-components";
const Container=styled.div`
	display:flex;
	flex-direction:column;
	gap:20px;
	padding-top:30px;
	width:100%;
	max-width:250px;
	height:100vh;
	background:#a5a5a5;
`;
const SideBarItem=styled.div`
	display:flex;
	align-items:center;
	justify-content:center;
	margin:0 20px;
	padding 5px 10px;
	border-radius:6px;
	background:#f6f6f6;
	gap:20px;
	cursor: pointer;
`;

import add_product_icon from "../assets/cart_icon.png"
export default function SideBar()
{
	return(
		<Container>
			<Link to={"/addproduct"} style={{textDecoration:"none"}}>
				<SideBarItem>
					<img src={add_product_icon}></img>
					<p>Add product</p>
				</SideBarItem>	
			</Link>			
			<Link to={"/listproduct"} style={{textDecoration:"none"}}>
				<SideBarItem>
					<img src={add_product_icon}></img>
					<p>List product</p>
				</SideBarItem>	
			</Link>			
		</Container>
	);
}
