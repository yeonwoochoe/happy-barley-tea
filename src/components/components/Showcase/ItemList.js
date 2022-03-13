import React from "react";
import styled from "styled-components";

const ItemList = styled.div`
  figure {
    width: calc(100% / 4);
    height: 290px;
    margin-bottom: 20px;
    background-color: #fad; }
  figcaption {
    font-size: 24px;
    color: #fff; }
`;
const ItemListSample = () => {
  <ItemList>
    <figure></figure>
    <figcaption></figcaption>
  </ItemList>
};
export default ItemListSample;

