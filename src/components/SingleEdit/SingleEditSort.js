import React, { useState } from "react";
import { SortList } from "../common/Common";

function SingleEditSort(props) {
  const listArr = ["최신순", "추천순"];
  const [sortData, setSortData] = useState(listArr[0]);
  const sortHandler = (el) => {
    setSortData(el);
    if (el === listArr[0]) {
      props.sort[0]();
    } else {
      props.sort[1]();
    }
  };

  // console.log(props.category);

  return (
    <SortList>
      {props.category === "all" ? (
        <ul>
          {listArr.map((el, idx) => (
            <li key={idx}>
              <button
                type="button"
                onClick={() => sortHandler(el)}
                style={
                  sortData === el ? { color: "#000" } : { color: "#9f9f9f" }
                }
              >
                {el}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        " "
      )}
    </SortList>
  );
}

export default SingleEditSort;
