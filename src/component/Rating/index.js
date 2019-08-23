import React from 'react';
import {Rating} from 'semantic-ui-react';

const RatingComponent = ({data}) => (
  <React.Fragment>
    <Rating maxRating={5} disabled defaultRating={(Number(data&&data.average)*5) / 10} icon='star' size='mini' />
    <span>{data&&data.average}{`（${data&&data.numRaters}人评价）`}</span>
   </React.Fragment>
  
)

export { RatingComponent };
