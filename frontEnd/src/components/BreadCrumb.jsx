import styled from "styled-components";

const Container=styled.div`
	display:flex;
	align-items:center;
	gap:8px;
	color:#5e5e5e;
	font-size:16px;
	font-weight:600px;
	margin:60px 170px;
	text-transform:capitalize;
`;


import arrow_icon from "../components/assets/breadcrum_arrow.png"
export default function BreadCrumb(props){
	const {product} = props;
	return(<>
		<Container>
			HOME<img src={arrow_icon}alt="" />
			SHOP<img src={arrow_icon}alt="" />
			{product.category}<img src={arrow_icon}alt="" />
			{product.name}<img src={arrow_icon}alt="" />
		</Container>
	</>);
}
