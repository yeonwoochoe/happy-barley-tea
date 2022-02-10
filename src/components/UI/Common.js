import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  height: 300px;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
export const CardContent = styled.div`
  width: 100%;
  height: auto;
  padding: 0.3rem 0;

  dt {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;

    & span {
      color: #999;
    }

    &:last-child {
      font-size: 20px;
      font-weight: 400;
    }
  }
`;
export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: initial;
`;

// export const HeadTitle = styled.h2`
//   align-self: flex-start;
//   margin-top: 40px;
//   margin-bottom: 40px;
//   word-spacing: -10px;
//   font-size: 36px;
//   font-weight: bold;
//   text-transform: capitalize;
//   color: ${(props) => props.color};
//   &::before {
//     content: "";
//     display: inline-block;
//     width: 18px;
//     height: 30px;
//     margin-right: 10px;
//     background-color: ${(props) => props.color};
//   }
// `;

// export const ViewWrapper = styled.div`
//   display: grid;
//   grid-template-columns: ${(props) => props.columns};
//   width: 100%;
//   height: ${(props) => props.height || "400px"};
//   margin-bottom: 40px;
// `;
// export const ViewContent = styled.div`
//   width: 100%;
//   background-color: #aaa;
// `;
// export const ViewImage = styled.div`
//   width: 100%;
//   background-color: #ddd;
// `;
