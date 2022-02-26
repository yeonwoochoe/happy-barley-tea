import React from 'react';
import { WrapperDiv, CardList } from '../common/Common';
import LifeStyleSort from './LifeStyleSort';
import LifeStyleCard from './LifeStyleCard';

function LifeStyleCardList(props) {
  return (
    <WrapperDiv>
      <h3 className='blind'>contents list</h3>
      <LifeStyleSort category={props.category} sort={props.sort} />
      <CardList>
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
