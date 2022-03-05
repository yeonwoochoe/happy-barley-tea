import React, {useState} from 'react';
import styled from 'styled-components';
import ItemList from '../components/Showcase/ItemList.js';

const ItemDiv = styled.div`
  display: flex;
  flex-direction: row;  
  width: 100%;
  height: 382px;
  margin-right: 20px;
  background-color: #fad;
  
  // ItemList 
`;

const ItemDivSample = (props) => {
  const [items, setItems ] = useState([
    { id: 1, name: "눈사람" },
    { id: 2, name: "얼음" },
    { id: 3, name: "눈" },
    { id: 4, name: "바람" }
  ]);
  const [ name, setName ] = useState("");

  const addItems = () => {
    let itemCopy = [...items];
    let size = items[items.length - 1].id;
    itemCopy.push({id: size + 1, name: name });
    setItems(itemCopy);
  };

  const onChangeHandle = (e) => {
    let value = e.target.value;
    setName(value);
  };

  const onRemoveItem = (id) => {
    setItems((items) => items.filter((item) => item.id != id));
  };

  return (
    <>
      <input type="text" value={name} onChange={onChangeHandle} />
      <buttton onClick={addItems}>add</buttton>

      <div>
        {items.map((item, index) => {
          return (
            <ItemList
            key={index}
            item={item}
            onRemoveItem={onRemoveItem}
            />
          );
        })}
      </div>
    </>
  )
// return <ItemDiv>
//         {/* {nameList} */}
//         {ItemList}
//        </ItemDiv>;
};

// const ItemDivSample = () => {
//     return (
//         <ItemDiv>
//           <figure>img</figure>
//           <figcaption>나홀로 즐겁게 혼밥</figcaption>
//         </ItemDiv>
//     );
// };

export default ItemDivSample;