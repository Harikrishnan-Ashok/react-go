import styled from "styled-components";
import Item from "./Item";
import { useEffect, useState } from "react";

const NewCollec = styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	gap:10px;
	margin-bottom:100px;
`;
const H = styled.div`
	color:#171717;
	font-size:50px;
	font-weight:600;
`;
const Collec = styled.div`
	display:grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap:30px;
	margin-top:50px;
`;

export default function NewCollection() {
	const [new_collection, setNew_Collec] = useState([])
	useEffect(() => {
		fetch("http://localhost:4000/newcollection")
			.then((res) => res.json()).then((data) => setNew_Collec(data))
	}, [])
	return (<>
		<NewCollec>
			<H>NEW COLLECTION</H>
			<hr></hr>
			<Collec>
				{new_collection.map((item, i) => {
					return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} ></Item>
				})}
			</Collec>
		</NewCollec>
	</>);
}
