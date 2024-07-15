import styled from "styled-components";
const Container=styled.div`
	display:flex;
	align-items:center;
	padding:50px 60px;
	box-shadow:0 1px 3px -2px #000;
	justify-content:space-between;
	margin-bottom:1px;
	background:white;
`;
import navlogo from "../assets/logo.png";
import navprofile from "../assets/pfp.ico";
export default function Navbar()
{
	return<Container>
		<img src={navlogo} alt=""></img>
		<h1>Admin Panel </h1>
		<img style={{height:"60px",width:"60px"}} src={navprofile} alt=""></img>
	</Container>;
}
