import styled from "styled-components";

import Insta from "./assets/instagram_icon.png"
import Whatsapp from "./assets/whatsapp_icon.png"
import Pintrest from "./assets/pintester_icon.png"
import Flogo from "./assets/logo_big.png"

const Container=styled.div`
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	gap:50px;
`;
const Logo=styled.div`
	display:flex;
	align-items: center;
	gap:20px;
`;
const P=styled.p`
	font-size:46px;
	font-weight:700;
	color:#464646;
`;
const List=styled.ul`
	display:flex;
	list-style:none;
	gap:50px;
	color:#252525;
	font-size:20px;
`;
const Item=styled.li `
	cursor: pointer;
`;
const SocialIcons=styled.div `
	display:flex;
	gap:20px;
`;
const SocialIconsContainer=styled.div `
	padding:10px;
	padding-bottom:6px;
	background:#fbfbfb;
	border:1px solid #ebebeb;
`;
const HR=styled.hr `
	margin-top:30px;
	width:80%;
	border:none;
	border-radius:10px;
	height:3px;
	background:#c7c7c7;

`;
const FooterCopyright=styled.div `
	display:flex;
	flex-direction:column;
	align-items:center;
	gap:30px;
	width:100%;
	margin-bottom:30px;
	font-size:20px;
	color:#1a1a1a;
`;

export default function Footer()
{
	return(<>
		<Container>
			<Logo>
				<img src={Flogo} alt=" "></img>
				<P>POTS-KADA</P>
			</Logo>
			<List>
				<Item>Company</Item>
				<Item>Products</Item>
				<Item>Offices</Item>
				<Item>About</Item>
				<Item>Contact</Item>
			</List>
			<SocialIcons>
				<SocialIconsContainer>
					<img src={Insta} alt=""></img>
				</SocialIconsContainer>
				<SocialIconsContainer>
					<img src={Whatsapp} alt=""></img>
				</SocialIconsContainer>
				<SocialIconsContainer>
					<img src={Pintrest} alt=""></img>
				</SocialIconsContainer>	
			</SocialIcons>
		</Container>
		<FooterCopyright>
			<HR />
			<p>Copy Right @ 2024 - All rights Reserved</p>
		</FooterCopyright>
		</>);
}
