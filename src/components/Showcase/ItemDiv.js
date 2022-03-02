import React from 'react';
import styled from 'styled-components';
import ItemList from '../components/Showcase/ItemList.js';

const ItemDiv = styled.div`
  display: flex;
  flex-direction: row;  
  width: 100%;
  height: 382px;
  margin-right: 20px;
  background-color: #fad;
  
  // ItemList 
`;

const ItemDivSample = () => {
  const names = ['1', '2', '3', '4'];
  const nameList = names.map((name, idx) => <ItemDiv key={idx}>{name}</ItemDiv>);
return <ItemDiv>{nameList}</ItemDiv>;
};

// const ItemDivSample = () => {
//     return (
//         <ItemDiv>
//           <figure>img</figure>
//           <figcaption>나홀로 즐겁게 혼밥</figcaption>
//         </ItemDiv>
//     );
// };

export default ItemDivSample;