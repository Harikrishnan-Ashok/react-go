import styled from "styled-components"
	
const Container=styled.div`
	width:65%;
	height:40vh;
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	margin:auto;
	padding:0px 140px;
	margin-bottom:150px;
	background: linear-gradient(180deg, #fde1ff 0%, rgba(225, 255, 234, 0.13) 60%);
	gap:30px;
`;
const H = styled.h1`
	color:#454545;
	font-size:55px;
	font-weight:600;
`;
const P = styled.p`
	color:#454545;
	font-size:20px;
`;
const Input=styled.div`
	display:flex;
	align-items:center;
	justify-content:space-between;
	background:white;
	width:730px;
	height:70px;
	border-radius:80px;
	border:1px solid #e3e3e3;
`;
const TextBox =styled.input`
	width:500px;
	margin-left:30px;
	border:none;
	outline:none;
	color:#616161;
	font-size:16px;
`;
const Btn=styled.button`
	width:210px;
	height:70px;
	border-radius:80px;
	background:black;
	color:white;
	font-size:16px;
	cursor: pointer;
`;

export default function NewsLetter() 
{
	return(<>
		<Container>
			<H>Get Exclusive offers on your Email</H>
			<P>subscribe to our news letter to stay updated</P>
			<Input>
				<TextBox type="email" placeholder="Please enter your email"></TextBox>
				<Btn>subscribe</Btn>
			</Input>
		</Container>
	</>)
}
