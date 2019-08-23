import React from 'react';
import {Rating} from 'semantic-ui-react';
import './index.css';

const BlockRate = ({data}) => (
  <div className="rate_box clearfix">
    <span className="rate_num">{data&&data.average}</span>
    <div className="rate_info">
      <Rating maxRating={5} disabled defaultRating={(Number(data&&data.average)*5) / 10} icon='star' size='large' />
      <div>{`${data&&data.numRaters}人评价`}</div>
    </div>
   </div>
  
)

export { BlockRate };
