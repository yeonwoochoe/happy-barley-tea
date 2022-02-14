import React, { Fragment } from 'react';
import styled from 'styled-components';
import { CardCaption, CardImage, WrapperDiv } from '../common/Common';

const StyledLi = styled.li`
  width: calc(33.33% - 40px);
  height: 548px;
  margin-bottom: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:nth-child(10n - 5),
  &:nth-child(10n - 1) {
    width: calc(66.67% - 20px);
  }
`;

function Card(props) {
  return (
    <Fragment>
      <StyledLi>
        <WrapperDiv>
          <CardImage height={'470px'}>
            <img src={props.image} alt={props.title} />
          </CardImage>
          <CardCaption>
            <dt>{props.category}</dt>
            <dd>{props.title}</dd>
          </CardCaption>
        </WrapperDiv>
      </StyledLi>
    </Fragment>
  );
}

export default Card;
