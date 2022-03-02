import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import DummyData from "../components/SingleEdit/DummyData";
// import TabBtn from "../components/SingleEdit/TabBtn";
import SingleEditContent from "../components/SingleEdit/SingleEditContent";
import { db, storage } from "../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

import { useLocation } from "react-router";
import {
  HeaderSecondTitle,
  SectionWrapper,
  WrapperDiv,
} from "../components/common/Common";

const SingleEditDiv = styled.section`
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
const SingleEdit = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [isLoading, setIsloding] = useState(true);
  const [clickNum, setClickNum] = useState(1);
  const [item, setItem] = useState([]);
  const [categoryName, setCategoryName] = useState("all");

  const categoryArr = ["all", "Expert's Edit", "Your Edit", "Tester's Edit"];

  useEffect(() => {
    setIsloding(true);
    onSnapshot(collection(db, "singleEdit"), (snapshot) => {
      const dataArr = [];
      const textArr = snapshot.docs.map((doc) => doc.data());
      for (const key in textArr) {
        const rel = {
          image: `https://firebasestorage.googleapis.com/v0/b/the-single-plus.appspot.com/o/singleEdit%2Fthumb_${key.padStart(
            3,
            "0"
          )}.png?alt=media&token=62f796ec-0cf3-4bbb-aba2-0c727accd534`,
          ...textArr[key],
        };
        dataArr.push(rel);
      }

      console.log(dataArr);
      setItem(dataArr);
    });

    setIsloding(false);
  }, []);

  const storageRef = ref(storage, "singleEdit/thumb_000.png");
  getDownloadURL(storageRef).then((url) => console.log(url));

  const filterData = item
    .filter((card, idx) => {
      if (categoryName === "all") {
        return card;
      } else {
        return categoryName === card.category;
      }
    })
    .filter((card, idx) => idx < 9 * clickNum);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const movePageHandler = (cateName) => {
    setClickNum(1);
    setCategoryName(cateName);
  };

  const fetchMoreHandler = (e) => {
    e.preventDefault();
    setClickNum(clickNum + 1);
  };

  const sortNewHandler = () => {
    const sortData = [...item];
    sortData.sort((a, b) => new Date(b.date) - new Date(a.date));
    console.log(sortData, "new");
    setItem(sortData);
  };

  const sortPopularHandler = () => {
    const sortData = [...item];
    sortData.sort((a, b) => b.like - a.like);
    console.log(sortData, "like");
    setItem(sortData);
  };

  const ExpertsEditSolt = categoryArr.filter((el) => el === "Expert's Edit");

  return (
    <SingleEditDiv>
      <SectionWrapper width="1320px" padding="100px 0 145px">
        <WrapperDiv>
          <HeaderSecondTitle fontSize={"44px"} color={`#111`}>
            single edit
          </HeaderSecondTitle>
          <WrapperDiv>
            <TabMenuList>
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
        <SingleEditContent
          item={filterData}
          category={categoryName}
          sortExpertsEdit={ExpertsEditSolt}
          sort={[sortNewHandler, sortPopularHandler]}
          fetchMoreHandler={fetchMoreHandler}
        />
      </SectionWrapper>
    </SingleEditDiv>
  );
};

export default SingleEdit;
