import styled from "styled-components";

const Cont=styled.div`
	align-items:center;
	display:flex;
	height:100vh;
	background:linear-gradient(180deg, #fde1ff,#e1ffea22 60%)
`;
const Left=styled.div`
	flex:1;
	display:flex;
	flex-direction:column;
	justify-content:center;
	gap:20px;
	padding-left:180px;
	line-height:1.1;
`;
const P= styled.p`
	color:#171717;
	font-size:100px;
	font-weight:700;
`;
const HandIcon=styled.div`
	display:flex;
	align-items:center;
	gap:20px;
`;
const Right=styled.div`
	flex:1;
	display:flex;
	align-items:center;
	justify-content:center;
`;
const Latest=styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	gap:15px;
	width:310px;
	height:70px;
	border-radius:75px;
	margin-top:30px;
	background: #ff4141;
	color:white;
	font-size:22px;
	font-weight:500;

`;

import  hand from "./assets/hand.png"
import pfp from "./assets/pfp.ico"
import arrow from "./assets/arrow.png"
export default function Hero()
{
	return(<>
	<Cont>
		<Left>
			<h2 style={{color:"#090909",fontSize:"26px",fontWeight:"600"}}>NEW ARRIVALS ONLY</h2>
			<div>
				<HandIcon>
					<P>New</P>
					<img style={{width: "50px", height: "50px"}} src={hand} alt="hand here" />
				</HandIcon>
				<P>Collections</P>
				<P>For Everyone</P>
			</div>
			<Latest>
				<div>Latest Collections</div>
				<img style={{width: "50px", height: "50px",}} src={arrow} alt="hand here" />
			</Latest>
		</Left>
		<Right>
			<img style={{width:"500px",height:"500px"}} src={pfp} alt="hand here" />
		</Right>
	</Cont>
	</>);
}
