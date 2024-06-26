import {createContext} from "react";

export const ShopContext = createContext(null);
import all_products from "../components/assets/all_product.js"

export default function ShopContextProvider(props)
{
	var contextValue={all_products}
	return(
		<ShopContext.Provider value={contextValue}>
		{props.children}
		</ShopContext.Provider>
	)
}
