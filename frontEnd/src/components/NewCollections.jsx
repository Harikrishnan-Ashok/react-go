import styled from "styled-components";
import Item from "./Item";
import new_collection from "./assets/new_collections"

const NewCollec=styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	gap:10px;
	height:90vh;
`;
const H=styled.div`
	color:#171717;
	font-size:50px;
	font-weight:600;
`;
const Collec=styled.div`
	display:grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap:30px;
	margin-top:50px;
`;

export default function NewCollection()
{
	return(<>
		<NewCollec>
			<H>NEW COLLECTION</H>
			<hr></hr>
			<Collec>
			{new_collection.map((item,i)=>{
				return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} ></Item>
				})}
			</Collec>
		</NewCollec>
	</>);
}
