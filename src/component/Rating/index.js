import React from 'react';
import {Rating} from 'semantic-ui-react';

const RatingComponent = ({data}) => (
  <React.Fragment>
    <Rating maxRating={5} disabled defaultRating={(Number(data.average)*5) / 10} icon='star' size='mini' />
    <span>{data.average}{`（${data.numRaters}人评价）`}</span>
   </React.Fragment>
  
)

export { RatingComponent };
