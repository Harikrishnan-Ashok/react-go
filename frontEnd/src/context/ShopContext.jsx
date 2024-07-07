import {createContext, useState} from "react";

export const ShopContext = createContext(null);
import all_product from "../components/assets/all_product.js"

function getDefaultKart()
{
	let kart={};
	for(let i=0;i<all_product.length+1;i++)
	{
		kart[i]=0;
	}
	return kart;
}

export default function ShopContextProvider(props)
{
	const[kartItem,setKartItem]=useState(getDefaultKart())

	function addToKart(itemId)
	{
		setKartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
		console.log(kartItem)
	}

	function removeFromKart(itemId)
	{
		setKartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
	}
	function getTotal()
	{
		let total=0;
		for(const i in kartItem)
		{
			if(kartItem[i]>0)
			{
				let iteminfo= all_product.find((product)=>product.id===Number(i))
				total=total+iteminfo.new_price * kartItem[i]
			}
		}
		return total;
	}
		var contextValue={all_product,kartItem,addToKart,removeFromKart,getTotal}
	return(
		<ShopContext.Provider value={contextValue}>
		{props.children}
		</ShopContext.Provider>
	)
}
