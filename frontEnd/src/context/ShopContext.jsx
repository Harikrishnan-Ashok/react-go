import {createContext} from "react";

export const ShopContext = createContext(null);
import all_product from "../components/assets/all_product.js"

export default function ShopContextProvider(props)
{
	var contextValue={all_product}
	return(
		<ShopContext.Provider value={contextValue}>
		{props.children}
		</ShopContext.Provider>
	)
}
