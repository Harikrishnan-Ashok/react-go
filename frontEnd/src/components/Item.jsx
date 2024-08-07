import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemContainer=styled.div`
	width:350px;
	&:hover{
		transform:scale(1.05);
		transition:0.6s;
	}
`;
const P=styled.p`
	margin:6px 0px;
`;
const ItemPrices=styled.div`
	display:flex;
	gap:20px;
`;
const NewPrice=styled.div`
	color:#374251;
	font-size:18px;
	font-weight:600;
`;
const OldPrice=styled.div`
	color:#8c8c8c;
	font-size:18px;
	font-weight:500;
	text-decoration:line-through;
`;

export default function Item(props)
{
	return(<>
		<ItemContainer>
			<Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=""></img></Link>
			<P>{props.name}</P>
			<ItemPrices>
				<NewPrice>{props.new_price} Rps</NewPrice>
				<OldPrice>{props.old_price} Rps</OldPrice>
			</ItemPrices>
		</ItemContainer>
	</>);
}
