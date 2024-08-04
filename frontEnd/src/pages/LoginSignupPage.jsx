import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	width:100%;
	height:80vh;
	background:#fce3fe;
	padding-top:100px;
`;
const Body = styled.div`
	display:flex;
	flex-direction:column;
	width:500px;
	height:600px;
	background:white;
	margin:auto;
	padding:40px 60px;
`;
const H = styled.h1`
	margin:20px 0px;
`;
const LoginSignupFeild = styled.div`
	display:flex;
	flex-direction:column;
	gap:30px;
	margin-top:30px;
`;
const Input = styled.input`
	height:72px;
	width:100%;
	padding-left:20px;
	border:1px soild #c9c9c9;
	outline:none;
	color:#5c5c5c;
	font-size:18px;	
`;
const Button = styled.button`
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

const LSLogin = styled.div`
	margin-top:20px;
	color:#5c5c5c;
	font-size:18px;
	font-weight:500;
`;
const P = styled.p`

`;
const LSAgreed = styled.div`
	display:flex;
	align-items:center;
	margin-top:25px;
	gap:20px;
	color:#5c5c5c;
	font-size:18px;
	font-weight:500;
`;

export default function LoginSignupPage() {
	const [state, setState] = useState("login")
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		email: ""
	})

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}
	async function login() {
		console.log("login", formData)
		let responseData;
		await fetch("http://localhost:4000/login", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		}).then((response) => response.json()).then((data) => responseData = data)
		if (responseData.success) {
			localStorage.setItem("auth-token", responseData.token);
			window.location.replace("/")
		}
		else { alert("Check the email and password again ") }
	}
	async function signup() {
		console.log("signup", formData)
		let responseData;
		await fetch("http://localhost:4000/signup", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		}).then((response) => response.json()).then((data) => responseData = data)
		if (responseData.success) {
			localStorage.setItem("auth-token", responseData.token);
			window.location.replace("/")
		}
		else { alert("Check the email and password again ") }
	}

	return (<>
		<Container>
			<Body>
				<H>{state}</H>
				<LoginSignupFeild>
					{state === "Sign Up" ? <Input name="username" value={formData.username} onChange={handleChange} type="text" placeholder="Your Name"></Input> : <></>}
					<Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email"></Input>
					<Input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Your Password"></Input>
				</LoginSignupFeild>
				<Button onClick={() => { state === "login" ? login() : signup() }}>Contine</Button>

				{state === "Sign Up" ? (
					<LSLogin>
						Already have an account?
						<span
							onClick={() => setState("Login")}
							style={{ color: "#ff4141", fontWeight: "600", marginLeft: "10px", cursor: "pointer" }}
						>
							Login
						</span>
					</LSLogin>
				) : (
					<LSLogin>
						Create an account
						<span
							onClick={() => setState("Sign Up")}
							style={{ color: "#ff4141", fontWeight: "600", marginLeft: "10px", cursor: "pointer" }}
						>
							Sign Up
						</span>
					</LSLogin>
				)}
				<LSAgreed>
					<input type="checkbox" name="" id=""></input>
					<P>By continewing i agreed to the terms and policies...</P>
				</LSAgreed>
			</Body>
		</Container >
	</>);
}
