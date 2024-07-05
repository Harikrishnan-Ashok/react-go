import styled from "styled-components";

const Container=styled.div`
	width:100%;
	height:80vh;
	background:#fce3fe;
	padding-top:100px;
`;
const Body=styled.div`
	display:flex;
	flex-direction:column;
	width:500px;
	height:600px;
	background:white;
	margin:auto;
	padding:40px 60px;
`;
const H =styled.h1`
	margin:20px 0px;
`;
const LoginSignupFeild=styled.div`
	display:flex;
	flex-direction:column;
	gap:30px;
	margin-top:30px;
`;
const Input=styled.input`
	height:72px;
	width:100%;
	padding-left:20px;
	border:1px soild #c9c9c9;
	outline:none;
	color:#5c5c5c;
	font-size:18px;	
`;
const Button=styled.button`
	margin-top:20px;
	width:525px;
	height:72px;
	color:white;
	background:#ff4141;
	margin-top:30xp;
	border:none;
	font-size:24px;
	font-weight:500;
	cursor:pointer;

`;

const LSLogin=styled.div`
	margin-top:20px;
	color:#5c5c5c;
	font-size:18px;
	font-weight:500;
`;
const P=styled.p`

`;
const LSAgreed=styled.div`
	display:flex;
	align-items:center;
	margin-top:25px;
	gap:20px;
	color:#5c5c5c;
	font-size:18px;
	font-weight:500;
`;

export default function LoginSignupPage()
{
	return(<>
		<Container>
			<Body>
				<H>SIGN UP</H>
				<LoginSignupFeild>
					<Input type="text" placeholder="Your Name"></Input>
					<Input type="email" placeholder="Your Email"></Input>
					<Input type="password" placeholder="Your Password"></Input>
				</LoginSignupFeild>
				<Button>Contine</Button>
				<LSLogin>Alredy have an account  <span style={{color:"#ff4141", fontWeight:"600"}}>Login</span></LSLogin>
				<LSAgreed>
				<input type="checkbox" name="" id=""></input>
				<P>By continewing i agreed to the terms and policies...</P>
			</LSAgreed>
			</Body>
		</Container>
	</>);
}
