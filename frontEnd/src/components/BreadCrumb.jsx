import styled from "styled-components";

const Container=styled.div``;


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
