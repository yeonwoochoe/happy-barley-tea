import React, { useState } from "react";
import { SortAllList } from "../common/Common";

function ExpertsEditSort(props) {
  const listArr = ["ALL", "#STYLE", "#BEAUTY", "#LIFE"];
  const [sortData, setSortData] = useState(listArr[0]);
  console.log(props);

  const sortHandler = (el) => {
    setSortData(el);
    if (el === listArr[0]) {
      props.sort[0]();
    } else {
      props.sort[1]();
    }
  };

  return (
    <SortAllList>
      <ul>
        {props.category === "Expert's Edit" ? (
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
      </ul>
    </SortAllList>
  );
}

export default ExpertsEditSort;
