import {useContext} from "react";
import {ShopContext} from "../context/ShopContext";
import {useParams} from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import ProductDisplay from "../components/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts";

export default function Product()
{
	const {all_product}=useContext(ShopContext);
	const {productId}= useParams();
	const product = all_product.find((e)=>e.id===Number(productId))
	return(<>
		<BreadCrumb product={product}></BreadCrumb>	
		<ProductDisplay product={product}></ProductDisplay>
		<DescriptionBox></DescriptionBox>
		<RelatedProducts></RelatedProducts>
	</>);
}
