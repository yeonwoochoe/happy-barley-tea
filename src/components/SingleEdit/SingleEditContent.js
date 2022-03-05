import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { CardCaption, CardImage } from "../common/Common";
import SingleEditSort from "./SingleEditSort";
import ExpertsEditSort from "./ExpertsEditSort";
import { WrapperDiv } from "../common/Common";
import YourEditSort from "./YourEditSort";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: ${(props) => props.height || "100%"};
  margin-top: 40px;
  margin-bottom: 100px;
  @media screen and (max-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const SoltBtnWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
  text-align: right;

  span {
    height: 0.8rem;
    border-right: 1px solid #aaa;
    color: #999;
  }
  button {
    font-size: ${(props) => props.size || "14px"};
    font-weight: 700;
    color: ${(props) => props.color || "#333"};
    text-decoration: ${(props) => props.decoration};

    &:last-child {
      color: ${(props) => props.color || "#999"};
    }
  }
`;

const Card = styled.div`
  position: relative;
  width: calc(33.33% - 40px);
  margin-bottom: 40px;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
const CardContent = styled.div`
  width: 100%;
  height: auto;
  padding: 0.3rem 0;
  dt {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;
    & span {
      color: #333;
    }
    &:last-child {
      font-size: 20px;
      font-weight: 400;
    }
  }
`;

const IconDiv = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 48px;
  height: 48px;
  background-color: #fff;
  border-radius: 100%;
  font-size: 30px;
  line-height: 53px;
  text-align: center;
  cursor: pointer;
`;

const SingleEditContent = (props) => {
  const [isExpertsEditSort, setIsxpertsEditSort] = useState(props.category);

  console.log(props.category);

  return (
    <WrapperDiv>
      {isExpertsEditSort && (
        <SingleEditSort category={props.category} sort={props.sort} />
      )}
      <YourEditSort category={props.category} sort={props.sort} />
      <ExpertsEditSort category={props.category} sort={props.sort} />

      <CardContainer>
        {props.item.map((Val) => {
          return (
            <Card key={Val.id}>
              <IconDiv>
                <FaRegHeart />
              </IconDiv>
              <CardImage height={`400px`}>
                <Link to="/">
                  <img alt="" src={`${Val.image}`} />
                </Link>
              </CardImage>
              <CardContent>
                <CardCaption>
                  <dt>
                    <Link to="/">
                      <span> {Val.category}</span>
                      <span>{Val.tag}</span>
                    </Link>
                  </dt>
                  <dd>
                    <Link to="/"> {Val.title}</Link>
                  </dd>
                </CardCaption>
              </CardContent>
            </Card>
          );
        })}
      </CardContainer>
      <SoltBtnWrapper
        justify={`center`}
        size={`20px`}
        color={`#333`}
        decoration={`underline`}
      >
        <button type="button" onClick={props.fetchMoreHandler}>
          &#43;MORE
        </button>
      </SoltBtnWrapper>
    </WrapperDiv>
  );
};

export default SingleEditContent;
