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
