import Hero from "../components/Hero";
import NewCollection from "../components/NewCollections";
import Offers from "../components/Offers";
import Popular from "../components/Popular";

export default function Shop()
{
	return(<>
		<Hero></Hero>
		<Popular></Popular>
		<Offers></Offers>
		<NewCollection />
	</>);
}


