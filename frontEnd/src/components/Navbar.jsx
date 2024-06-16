import styled from "styled-components"

const Container = styled.div`
	display:flex;
	justify-content:space-between;
	cursor: pointer;
`;
const Logo = styled.h1`
	margin: 0px,10px;	
`;
const Links = styled.h3`
	margin: 0px,10px;
`;
const LinkContainer = styled.div`
	display:flex;
	justify-content:space-around;
`;

export default function Navbar()
{
	return(
		<Container>
			<Logo> Test logo </Logo>
			<LinkContainer>
				<Links>link1</Links>
				<Links>link2</Links>
				<Links>link3</Links>
			</LinkContainer>
		</Container>
	)	
}
