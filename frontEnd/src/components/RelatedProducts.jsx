import styled from "styled-components";

const Container=styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	gap:10px;
	height:90vh;
`;
const H=styled.h1`
	color:#171717;
	font-size:50px;
	font-weight:600;

`;
const RPItem=styled.div`
	margin-top:50px;
	display:flex;
	gap:30px;
`;

import Item from "./Item"
import data_product from "../components/assets/data"
export default function RelatedProducts()
{
	return(<>
	<Container>
		<H>You may also like ..</H>
		<hr style={{width:"200px",height:"6px",borderRadius:"10px",background:"#252525"}}></hr>
		<RPItem>
			{data_product.map((item,i)=>{
			return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} ></Item>
			})}
		</RPItem>
	</Container>
	</>);
}
