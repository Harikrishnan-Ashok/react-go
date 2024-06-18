import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
export default function App()
{
	return(<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />}></Route>
				<Route path="*" element={<ErrorPage></ErrorPage>}></Route>
			</Routes>
		</BrowserRouter>
	</>);
}
