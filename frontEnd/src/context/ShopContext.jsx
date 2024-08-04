import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

function getDefaultKart() {
	let kart = {};
	for (let i = 0; i < 300 + 1; i++) {
		kart[i] = 0;
	}
	return kart;
}

export default function ShopContextProvider(props) {
	const [kartItem, setKartItem] = useState(getDefaultKart())
	const [all_product, setAllProduct] = useState([])

	useEffect(() => {
		fetch("http://localhost:4000/allproducts").then((res) => res.json()).then((data) => setAllProduct(data))
	}, [])

	function addToKart(itemId) {
		setKartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
		console.log(kartItem)
	}

	function removeFromKart(itemId) {
		setKartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
	}
	function getTotal() {
		let total = 0;
		for (const i in kartItem) {
			if (kartItem[i] > 0) {
				let iteminfo = all_product.find((product) => product.id === Number(i))
				total = total + iteminfo.new_price * kartItem[i]
			}
		}
		return total;
	}
	function getTotalKartItems() {
		let totalItem = 0;
		for (const item in kartItem) {
			if (kartItem[item] > 0) {
				totalItem = totalItem + kartItem[item]
			}
		}
		return totalItem
	}

	var contextValue = { all_product, kartItem, addToKart, removeFromKart, getTotal, getTotalKartItems }
	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	)
}
