import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import LifeStyleCardList from '../components/LifeStyle/LifeStyleCardList';
import { HeaderSecondTitle, SectionWrapper, WrapperDiv } from '../components/common/Common';

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
  button {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    text-transform: inherit;
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
  const [clickNum, setClickNum] = useState(1);
  const [categoryName, setCategoryName] = useState('all');

  const categoryArr = [
    'all',
    'trend',
    'enjoy',
    'shopping',
    'relationship',
    'business',
    'viewpoint',
    'culture',
  ];

  const categoryFilter = loadedData.filter((card, idx) => {
    if (categoryName === 'all') {
      return card;
    } else {
      return categoryName === card.category;
    }
  });
  const numFilter = categoryFilter.filter((card, idx) => idx < 10 * clickNum);

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

  const movePageHandler = props => {
    setClickNum(1);
    setCategoryName(props);
  };

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
              {categoryArr.map((el, idx) => (
                <li key={idx}>
                  <button type='button' onClick={() => movePageHandler(el)}>
                    {el}
                  </button>
                </li>
              ))}
            </TabMenuList>
          </WrapperDiv>
        </WrapperDiv>

        <LifeStyleCardList data={numFilter} category={categoryName} />

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
