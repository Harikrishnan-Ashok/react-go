import styled from "styled-components";

const Btn= styled.button``;

export default function Button({children})
{
	return(<>
		<Btn>{children}</Btn>
		</>);
}
