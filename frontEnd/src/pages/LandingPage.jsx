import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Container=styled.div`
	cursor:pointer;
	display:flex;
	width:100%;
	height:100vh;
	color:white;
	background-color:black;
`;
const LeftContainer=styled.div`
	flex:4;
	display:flex;
	flex-direction:column;
`;
const Head=styled.h1`
	margin-left:5%;
	font-weight:900;
	font-style:italic;
	flex:1;
`;
const Body=styled.div`
	flex:6;
	padding:0px 10%;
`;

const Text =styled.h1`
	font-size:7em;
`;
const Footer=styled.div`	

	text-align:center;
	flex:1;
`;
const Title=styled.span`
	text-decoration:underline;
	color:red;	
`;
const RightContainer=styled.div`
	display:flex;
	justify-content:space-around;
	flex:2;
`;
const ScrollDiv = styled.div`
	width:20%;
	background-color:blue;
`;


export default function LandingPage()
{
	return(<Container>
		<LeftContainer>
			<Head>B.IT</Head>
			<Body>
				<Text>Tired of Finding what u need ?</Text>
				<Text><Title>BUILD IT</Title> makes it easy</Text>	
			</Body>
			<Footer><NavLink to = "/apphome">take me to the site</NavLink> </Footer>
		</LeftContainer>
		<RightContainer>
			<ScrollDiv>test</ScrollDiv>
			<ScrollDiv>test</ScrollDiv>
		</RightContainer>
	</Container>);
}
