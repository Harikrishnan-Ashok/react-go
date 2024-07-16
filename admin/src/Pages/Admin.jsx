import styled from "styled-components";
import SideBar from "../Components/SideBar";
import {Route, Routes} from "react-router-dom";
import AddProduct from "../Components/AddProduct";
import ListProduct from "../Components/ListProduct";

const AdminContainer=styled.div`
	display:flex;
`;

export default function Admin()
{
	return(<>
		<AdminContainer>
			<SideBar></SideBar>
			<Routes>
				<Route path="/addproduct" element={<AddProduct></AddProduct>}></Route>
				<Route path="/listproduct" element={<ListProduct />}></Route>
			</Routes>
		</AdminContainer>
	</>);
}
