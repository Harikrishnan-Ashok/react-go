import { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../context/ShopContext";
import dropDown from "../components/assets/dropdown_icon.png"
import all_product from "../components/assets/all_product";
import Item from "../components/Item";

const Container = styled.div`
	display:block;
	width:82%;
	margin:30px auto;
`;
const IndexSort = styled.div`
	display:flex;
	justify-content:space-between;
	align-items:center;
	margin:0px170px;
`;
const StyleP = styled.p``;
const StyleSpan = styled.span`
	font-weight:600;
`;
const Sort = styled.div`
	padding:10px 20px;
	border-radius: 40px;
	border:1px solid;

`;
const Products = styled.div`
	display:flex;
	margin:20px170;
	display:grid;
	grid-template-columns:1fr 1fr 1fr 1fr;
	row-gap:80px;
`;
const LoadMore = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	margin:150px auto;
	width :233px;
	height:69px;
	border-radius:75px;
	background:#ededed;
	color:#787878;font-size:18px;
	font-weight:500px;
`;


export default function ShopCategory(props) {
  const { allProduct } = useContext(ShopContext);

  return (
    <Container>
      <img src={props.banner}></img>
	  <IndexSort>
		<StyleP>
			<StyleSpan>showing 1 - 12 </StyleSpan> out of 36 products
		</StyleP>
		<Sort> Sort By  <img src={dropDown}></img>
		</Sort>
	  </IndexSort>
	  <Products>
		{all_product.map((item,i)=>{
		if(props.category===item.category)
			{
				return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} ></Item>
			}
		else
			{
				return null;
			}
		})}
	  </Products>
	  <LoadMore>Explore More</LoadMore>
    </Container>
  );
}

