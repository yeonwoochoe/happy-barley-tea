import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import LifeStyleCardList from "../components/LifeStyle/LifeStyleCardList";
import {
  WrapperSection,
  HeaderSecondTitle,
  SectionWrapper,
  WrapperDiv,
} from "../components/common/Common";
import { db, storage } from "../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

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
  const [isLoading, setIsloding] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  const [clickNum, setClickNum] = useState(1);
  const [categoryName, setCategoryName] = useState("all");

  const categoryArr = [
    "all",
    "trend",
    "enjoy",
    "shopping",
    "relationship",
    "business",
    "viewpoint",
    "culture",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setIsloding(true);
    onSnapshot(collection(db, "lifestyle"), snapshot => {
      const dataArr = [];
      const textArr = snapshot.docs.map(doc => doc.data());
      for (const key in textArr) {
        const rel = {
          image: `https://firebasestorage.googleapis.com/v0/b/the-single-plus.appspot.com/o/lifestyle%2Fthumb_${key.padStart(
            3,
            "0"
          )}.png?alt=media&token=8e94089b-651c-4904-95d8-103ae92d681b`,
          ...textArr[key],
        };
        dataArr.push(rel);
      }

      // console.log(dataArr);
      setLoadedData(dataArr);
    });

    setIsloding(false);
  }, []);

  const storageRef = ref(storage, "lifestyle/thumb_000.png");
  // getDownloadURL(storageRef).then(url => console.log(url));

  const filterData = loadedData
    .filter((card, idx) => {
      if (categoryName === "all") {
        return card;
      } else {
        return categoryName === card.category;
      }
    })
    .filter((card, idx) => idx < 10 * clickNum);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const movePageHandler = cateName => {
    setClickNum(1);
    setCategoryName(cateName);
  };

  const sortNewHandler = () => {
    const sortData = [...loadedData];
    sortData.sort((a, b) => new Date(b.date) - new Date(a.date));
    console.log(sortData, "new");
    setLoadedData(sortData);
  };

  const sortPopularHandler = () => {
    const sortData = [...loadedData];
    sortData.sort((a, b) => b.like - a.like);
    console.log(sortData, "like");
    setLoadedData(sortData);
  };

  const fetchMoreHandler = e => {
    e.preventDefault();
    setClickNum(clickNum + 1);
  };

  return (
    <WrapperSection>
      <SectionWrapper width="1320px" padding="100px 0 145px">
        <WrapperDiv>
          <HeaderSecondTitle fontSize="44px" color="#111">
            lifestyle
          </HeaderSecondTitle>
          <WrapperDiv>
            <TabMenuList>
              <h3 className="blind">tab menu</h3>
              {categoryArr.map((el, idx) => (
                <li key={idx}>
                  <button type="button" onClick={() => movePageHandler(el)}>
                    {el}
                  </button>
                </li>
              ))}
            </TabMenuList>
          </WrapperDiv>
        </WrapperDiv>

        {
          <LifeStyleCardList
            data={filterData}
            category={categoryName}
            sort={[sortNewHandler, sortPopularHandler]}
          />
        }

        <More>
          <button type="button" onClick={fetchMoreHandler}>
            + more
          </button>
        </More>
      </SectionWrapper>
    </WrapperSection>
  );
};

export default LifeStyle;
