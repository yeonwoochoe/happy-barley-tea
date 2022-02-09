import styled from 'styled-components';

const StyledH2 = styled.h2`
  position: relative;
  padding-left: 30px;
  font-size: 44px;
  font-weight: 700;
  text-transform: capitalize;
  color: ${props => props.color || '#000'};
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    width: 20px;
    height: 40px;
    transform: translateY(-50%);
    background-color: ${props => props.color || '#000'};
  }
`;

export default StyledH2;
