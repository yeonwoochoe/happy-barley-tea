import React from "react";
import DummyData from "./DummyData";
import styled from "styled-components";

const TabMenuBtn = styled.li`
  button {
    font-size: 22px;
    font-weight: bold;
    color: #9f9f9f;
    text-transform: ${(props) => props.transform};
  }
  @media screen and (max-width: 320px) {
    justify-items: center;
    gap: 10px;
  }
`;

const TabBtn = ({ filterItem, setItem, conItems }) => {
  return (
    <>
      <TabMenuBtn transform={`uppercase`}>
        <button type="button" onClick={() => setItem(DummyData)}>
          All
        </button>
      </TabMenuBtn>
      {conItems.map((Val, id) => {
        return (
          <TabMenuBtn key={id}>
            <button type="button" onClick={() => filterItem(Val)}>
              {Val}
            </button>
          </TabMenuBtn>
        );
      })}
    </>
  );
};
export default TabBtn;
