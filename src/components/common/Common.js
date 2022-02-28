import styled from 'styled-components';

export const HeaderSecondTitle = styled.h2`
  align-self: ${props => props.alignSelf || 'flex-start'};
  margin-top: 40px;
  margin-bottom: 40px;
  word-spacing: ${props => props.wordSpacing || '-10px'};
  font-size: ${props => props.fontSize || '60px'};
  font-weight: bold;
  text-transform: capitalize;
  color: ${props => props.color};
  &::before {
    content: '';
    display: ${props => props.display || 'inline-block'};
    width: 24px;
    height: 48px;
    margin-right: 10px;
    background-color: ${props => props.color};
  }
`;

export const ViewWrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  width: 100%;
  height: ${props => props.height || '580px'};
  margin-bottom: 40px;
`;
export const ViewContent = styled.div`
  width: 100%;
  background-color: #aaa;
`;
export const ViewImage = styled.div`
  width: 100%;
  background-color: #ddd;
`;

export const WrapperDiv = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: center;
  flex-direction: ${props => props.flexDirection || 'column'};
  width: ${props => props.width || '100%'};
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${props => props.width || '100%'};
  margin: auto;
  padding: ${props => props.padding || '0 0 0 0'};
`;

/* display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px; */

// display: flex;
// flex-wrap: wrap;
// justify-content: space-between;
// align-items: center;
// width: 100%;

export const CardWrapper = styled.div`
  width: ${props => props.width || '100%'};
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 60px;
`;

export const CardLi = styled.li`
  width: ${props => props.width || '100%'};
  margin-bottom: 40px;
`;

export const CardImage = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height};
  background-color: #dddddd;
  img {
    width: 100%;
    background: no-repeat center/contain;
  }
`;

export const CardCaption = styled.dl`
  margin-top: 10px;
  align-self: flex-start;
  text-transform: uppercase;
  font-weight: bold;
  dt {
    margin-bottom: 10px;
    font-size: 14px;
  }
  dd {
    font-size: 22px;
  }
`;

export const FaceBook = styled.li`
  background: ${props => `url(${props.backgroundImage})`} no-repeat center/contain;
`;
export const Instargram = styled.li`
  background: ${props => `url(${props.backgroundImage})`} no-repeat center/contain;
`;
export const Youtube = styled.li`
  background: ${props => `url(${props.backgroundImage})`} no-repeat center/contain;
`;
export const Twitter = styled.li`
  background: ${props => `url(${props.backgroundImage})`} no-repeat center/contain;
`;
export const NaverPost = styled.li`
  background: ${props => `url(${props.backgroundImage})`} no-repeat center/contain;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1320px;
  margin: auto;
`;

export const WrapperSection = styled.section`
  width: 100%;
  height: auto;
  background-color: #fff;
`;
