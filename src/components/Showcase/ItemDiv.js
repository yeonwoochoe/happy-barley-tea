import React from 'react';
import styled from 'styled-components';

const ItemDiv = styled.div`
  width: 290px;
  height: 382px;
  background-color: #fad;
    figure {
    width: 290px;
    height: 290px;
    margin-bottom: 20px;
    background-color: #111; }
    figcaption {
      font-size: 24px;
      color: #fff; }
`;

const ItemDivSample = () => {
  const names = ['나홀로 즐겁게 혼밥', '스킨케어', '방구석 헬스장', '2022 베리 페리'];
  const nameList = names.map((name, idx) => <figcaption key={idx}>{name}</figcaption>);
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