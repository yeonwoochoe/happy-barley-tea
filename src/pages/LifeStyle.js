import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/LifeStyle/Card';
import {
  CardList,
  HeaderSecondTitle,
  SectionWrapper,
  WrapperDiv,
} from '../components/common/Common';
import { useLocation } from 'react-router';

const StyledDiv = styled.section`
  width: 100%;
  height: auto;
  background-color: #fff;
`;

const TabMenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  gap: 60px;
  font-size: 22px;
  font-weight: bold;
  color: #9f9f9f;
  text-transform: capitalize;
  li:first-child {
    text-transform: uppercase;
  }
`;

const More = styled.div`
  margin: auto;
  margin-top: 50px;
  text-align: center;
  button {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: underline;
  }
`;

const LifeStyle = () => {
  const { pathname } = useLocation();
  const dataUrl = './data/LifeStyle/dummyData.json';
  const [isLoading, setIsloding] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [clickNum, setClickNum] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setIsloding(true);
    fetch(dataUrl)
      .then(res => res.json())
      .then(data => {
        const dataArr = [];
        for (const key in data) {
          const rel = {
            id: key,
            ...data[key],
          };
          dataArr.push(rel);
        }
        setIsloding(false);
        setLoadedData(dataArr);
      });
  }, []);

  useEffect(() => {
    setFilterData(loadedData.filter((el, idx) => idx < 10 * clickNum));
  }, [loadedData, clickNum]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const fetchMoreHandler = e => {
    e.preventDefault();
    setClickNum(clickNum + 1);
  };

  return (
    <StyledDiv>
      <SectionWrapper width='1320px' padding='100px 0 145px'>
        <WrapperDiv>
          <HeaderSecondTitle fontSize='44px' color='#111'>
            lifestyle
          </HeaderSecondTitle>
          <WrapperDiv>
            <TabMenuList>
              <li>all</li>
              <li>trend</li>
              <li>enjoy</li>
              <li>shopping</li>
              <li>relationship</li>
              <li>business</li>
              <li>viewpoint</li>
              <li>culture</li>
            </TabMenuList>
          </WrapperDiv>
        </WrapperDiv>
        <WrapperDiv>
          <CardList>
            {filterData.map(data => (
              <Card key={data.id} category={data.category} image={data.image} title={data.title} />
            ))}
          </CardList>
        </WrapperDiv>
        <More>
          <button type='button' onClick={fetchMoreHandler}>
            + more
          </button>
        </More>
      </SectionWrapper>
    </StyledDiv>
  );
};

export default LifeStyle;
