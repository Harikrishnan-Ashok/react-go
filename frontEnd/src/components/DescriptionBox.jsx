import styled from "styled-components";

const Container=styled.div`
	margin:120px 170px;
`;
const Navigator=styled.div`
	display:flex;
`;
const NavBox=styled.div`
	display:flex;
	align-items:center;
	justify-content:center;
	font-size:16px;
	font-weight:600px;
	width:171px;
	height:70px;
	border:1px solid #d0d0d0;
`;
const Desc=styled.div`
	display:flex;
	flex-direction:column;
	gap:25px;
	border:1px solid #d0d0d0;
	padding:48px;
	padding-bottom:70px;

`;
const P=styled.p``;

export default function DescriptionBox()
{
	return(<>
		<Container>
			<Navigator>
				<NavBox>Description</NavBox>
				<NavBox style={{background:"#FBFBFB", color:"#555555"}}>Reviews (122) </NavBox>
			</Navigator>
			<Desc>
				<P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</P>
				<P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</P>
			</Desc>
		</Container>
	</>);
}
