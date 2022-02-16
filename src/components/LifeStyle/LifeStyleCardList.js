import React from 'react';
import { WrapperDiv, CardList } from '../common/Common';
import LifeStyleSort from './LifeStyleSort';
import LifeStyleCard from './LifeStyleCard';

function LifeStyleCardList(props) {
  const dataArr = [...props.data];
  console.log(dataArr);

  return (
    <WrapperDiv>
      <CardList>
        <LifeStyleSort category={props.category} date={props.date} good={props.good} />
        {props.data.map(data => (
          <LifeStyleCard
            key={data.id}
            category={data.category}
            image={data.image}
            title={data.title}
          />
        ))}
      </CardList>
    </WrapperDiv>
  );
}

export default LifeStyleCardList;
