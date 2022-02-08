import styled from "styled-components";

export const HeadTitle = styled.h2`
  align-self: ${(props) => props.alignSelf || "flex-start"};
  margin-top: 40px;
  margin-bottom: 40px;
  word-spacing: ${(props) => props.wordSpacing || "-10px"};
  font-size: 36px;
  font-weight: bold;
  text-transform: capitalize;
  color: ${(props) => props.color};
  &::before {
    content: "";
    display: ${(props) => props.display || "inline-block"};
    width: 18px;
    height: 30px;
    margin-right: 10px;
    background-color: ${(props) => props.color};
  }
`;

export const ViewWrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  width: 100%;
  height: ${(props) => props.height || "400px"};
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${(props) => props.width || "100%"};
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "100%"};
  margin: auto;
  padding: ${(props) => props.padding || "0 0 0 0"};
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
  width: ${(props) => props.width || "100%"};
`;

export const CardList = styled.ul`
  width: 100%;
`;

export const CardLi = styled.li`
  width: ${(props) => props.width || "100%"};
  margin-bottom: 40px;
  background-color: #aaaaaa;
`;

export const CardImage = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
  background-color: #dddddd;
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
