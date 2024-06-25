import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Shop from "./pages/Shop"
import ShopCategory from "./pages/ShopCategory"
import Product from "./pages/Product"
import Kart from "./pages/Kart"
import LoginSignup from "./pages/LoginSignupPage"
import Footer from "./components/Footer";

export default function App()
{
	return(
	<BrowserRouter>
		<Navbar></Navbar>
		<Routes>
			<Route path={"/"} element={<Shop />}></Route>
			<Route path={"/men"} element={<ShopCategory category="men" />}></Route>
			<Route path={"/women"} element={<ShopCategory category="women" />}></Route>
			<Route path={"/kids"} element={<ShopCategory category="kids" />}></Route>
			<Route path="/product" element={<Product />}>
				<Route path=':ProductID' element={<Product />}></Route>	
			</Route>
			<Route path={"/kart"} element={<Kart />}></Route>
			<Route path={"/login"} element={<LoginSignup />}></Route>
		</Routes>
		<Footer></Footer>
	</BrowserRouter>);
}
