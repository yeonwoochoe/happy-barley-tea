import styled from 'styled-components';

const StyledH2 = styled.h2`
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 44px;
  font-weight: 700;
  text-transform: capitalize;
  color: ${props => props.color || '#000'};
  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 40px;
    margin-right: 10px;
    background-color: ${props => props.color || '#000'};
  }
`;

export default StyledH2;
