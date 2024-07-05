import {useContext} from "react";
import {ShopContext} from "../context/ShopContext";
import {useParams} from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

export default function Product()
{
	const {all_product}=useContext(ShopContext);
	const {productId}= useParams();
	const product = all_product.find((e)=>e.id===Number(productId))
	{
		console.log(all_product)
		console.log(productId)
		console.log(product)
	}
	return(<>
		<BreadCrumb product={product}></BreadCrumb>	
	</>);
}
