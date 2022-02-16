import React, { useState } from 'react';
import styled from 'styled-components';

const SortList = styled.div`
  width: 100%;
  height: 21px;
  margin-bottom: 20px;

  ul {
    display: flex;
    justify-content: flex-end;
  }
  li {
    &:first-child {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #9f9f9f;
    }
  }
  button {
    font-size: 14px;
    font-weight: bold;
    color: #9f9f9f;
  }
`;

function LifeStyleSort(props) {
  const listArr = ['최신순', '인기순'];
  const [sortData, setSortData] = useState(listArr[0]);

  const sortHandler = props => {
    // console.log(e.target);
    setSortData(props);
    // if (sortData === listArr[0]) {

    // }
  };

  // console.log(sortData);

  return (
    <SortList>
      {props.category === 'all' ? (
        ''
      ) : (
        <ul>
          {listArr.map((el, idx) => (
            <li key={idx}>
              <button
                type='button'
                onClick={() => sortHandler(el)}
                style={sortData === el ? { color: '#000' } : { color: '#9f9f9f' }}
              >
                {el}
              </button>
            </li>
          ))}
        </ul>
      )}
    </SortList>
  );
}

export default LifeStyleSort;
