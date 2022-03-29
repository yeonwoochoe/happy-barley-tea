import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const ItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  // align-items:center;
  flex-wrap:wrap;
  width: 100%;
  height: ${(props) => props.height || "100%"};
  margin-right: 20px;
  background-color: #add;

  @media screen and (max-width: 320px) {
    display:flex;
    flex-dirextion: column;
    gap: 10px;
  }
`;

const ItemCard = styled.div`
  width: calc(100% / 4);
  
`
const ItemContent = styled.div`
  width: 100%;
  height: auto;
  padding: 0.3rem 0;
`

const ItemDivContent = (props) => {
  console.log(props);
   
  return (
    <ItemDiv>
      <ItemCard height={'290px'} />
        <Link to="/">
          <img alt="" src=""/>
        </Link>
      <ItemContent></ItemContent>
    </ItemDiv>
  )
}


const ItemDivSample = () => {
    return (
        <ItemDiv>
          <figure>img</figure>
          <figcaption>나홀로 즐겁게 혼밥</figcaption>
        </ItemDiv>
    );
};

export default ItemDivContent;