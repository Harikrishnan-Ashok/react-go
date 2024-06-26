import { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../context/ShopContext";

const Container = styled.div``;

export default function ShopCategory(props) {
  const { allProducts } = useContext(ShopContext);

  return (
    <Container>
      <img src={props.banner}></img>
    </Container>
  );
}

