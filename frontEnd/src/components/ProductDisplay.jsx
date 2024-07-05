import styled from "styled-components";

const Container=styled.div`
	display:flex;
	margin:0px 170px;
`;
const Left=styled.div`
	display:flex;
	gap:17px;
`;
const ImageList=styled.div`
	display:flex;
	flex-direction:column;
	gap: 16px;
`;
const Image=styled.div``;
const Right=styled.div``;
const H=styled.h1``;
const Star=styled.div``;
const P=styled.div``;
const Prices=styled.div``;
const OldPrice=styled.div``;
const NewPrice=styled.div``;
const SizeContainer=styled.div``;
const Sizes=styled.div``;
const Desc=styled.div``;
const Button=styled.button``;
const Category=styled.div``;

import star_icon from "../components/assets/star_icon.png"
import star_dull_icon from "../components/assets/star_dull_icon.png"
export default function ProductDisplay(props)
{
	const {product}=props;
	return(<>
		<Container>
			<Left>
				<ImageList>
					<img style={{height:"163px" }} src={product.image} alt=""></img>
					<img style={{height:"163px" }} src={product.image} alt=""></img>
					<img style={{height:"163px" }} src={product.image} alt=""></img>
					<img style={{height:"163px" }} src={product.image} alt=""></img>
				</ImageList>
				<img style={{width:"586px",height:"700px"}} src={product.image}></img>
			</Left>
			<Right>
				<H>{product.name}</H>
				<Star>
					<img src={star_icon}></img>
					<img src={star_icon}></img>
					<img src={star_icon}></img>
					<img src={star_icon}></img>
					<img src={star_dull_icon}></img>
					<P>(122)</P>
				</Star>
				<Prices>
					<OldPrice>${product.old_price}</OldPrice>
					<NewPrice>${product.new_price}</NewPrice>
				</Prices>
				<Desc>
					onnu poda vettavaliya descriptionum vayichoidn iricathe
				</Desc>
				<SizeContainer>
					<H>Select Size</H>
					<Sizes>
						<div>S</div>
						<div>M</div>
						<div>L</div>
						<div>XL</div>
						<div>XXL</div>
					</Sizes>
				</SizeContainer>
				<Button>Add to Kart</Button>
				<Category><span>Category:</span>Women,Tshirt,CropTop</Category>
				<Category><span>Tags:</span>Mordern,Latest</Category>
			</Right>
		</Container>
	</>);
}
