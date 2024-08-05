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
		if (localStorage.getItem("auth-token")) {
			fetch("http://localhost:4000/getkart", {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"auth-token": `${localStorage.getItem("auth-token")}`,
					"Content-Type": "application/json",
				}, body: "",
			}).then((res) => res.json()).then((data) => setKartItem(data))
		}
	}, [])
	function addToKart(itemId) {
		setKartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
		if (localStorage.getItem("auth-token")) {
			fetch("http://localhost:4000/addtokart", {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"auth-token": localStorage.getItem("auth-token"),
					"Content-Type": 'application/json',
				},
				body: JSON.stringify({ itemId: itemId })
			})
				.then((res) => {
					if (!res.ok) {
						throw new Error('Network response was not ok');
					}
					return res.json();
				})
				.then((data) => console.log(data))
				.catch((error) => console.error('Error:', error));
		}
	}
	function removeFromKart(itemId) {
		setKartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
		if (localStorage.getItem("auth-token")) {
			fetch("http://localhost:4000/removeFromKart", {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"auth-token": localStorage.getItem("auth-token"),
					"Content-Type": 'application/json',
				},
				body: JSON.stringify({ itemId: itemId })
			})
				.then((res) => {
					if (!res.ok) {
						throw new Error('Network response was not ok');
					}
					return res.json();
				})
				.then((data) => console.log(data))
				.catch((error) => console.error('Error:', error));
		}
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
