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

// const DUMMY_DATA = [
//   {
//     image: 'https://picsum.photos/470',
//     category: 'culture',
//     description: '여성 캐릭터가 뒤흔든 사극 판도',
//   },
//   {
//     image: 'https://picsum.photos/470',
//     category: 'culture',
//     description: '여성 캐릭터가 뒤흔든 사극 판도',
//   },
//   {
//     image: 'https://picsum.photos/470',
//     category: 'culture',
//     description: '여성 캐릭터가 뒤흔든 사극 판도',
//   },
//   {
//     image: 'https://picsum.photos/470',
//     category: 'culture',
//     description: '여성 캐릭터가 뒤흔든 사극 판도',
//   },
//   {
//     image: 'https://picsum.photos/470',
//     category: 'culture',
//     description: '여성 캐릭터가 뒤흔든 사극 판도',
//   },
//   {
//     image: 'https://picsum.photos/470',
//     category: 'culture',
//     description: '여성 캐릭터가 뒤흔든 사극 판도',
//   },
//   {
//     image: 'https://picsum.photos/470',
//     category: 'culture',
//     description: '여성 캐릭터가 뒤흔든 사극 판도',
//   },
//   {
//     image: 'https://picsum.photos/470',
//     category: 'culture',
//     description: '여성 캐릭터가 뒤흔든 사극 판도',
//   },
//   {
//     image: 'https://picsum.photos/470',
//     category: 'culture',
//     description: '여성 캐릭터가 뒤흔든 사극 판도',
//   },
//   {
//     image: 'https://picsum.photos/470',
//     category: 'culture',
//     description: '여성 캐릭터가 뒤흔든 사극 판도',
//   },
// ];

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

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
            {loadedData.map(data => (
              <Card key={data.id} category={data.category} image={data.image} title={data.title} />
            ))}
          </CardList>
        </WrapperDiv>
        <More>
          <button type='button'>+ more</button>
        </More>
      </SectionWrapper>
    </StyledDiv>
  );
};

export default LifeStyle;
