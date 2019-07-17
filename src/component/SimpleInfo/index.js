import React from 'react';
import { mapData } from '../method';
import './index.css';

const SimpleInfo = ({data}) => (
  <React.Fragment>
    <div className="info_title">{data.title}</div>
    <div className="info_extra">{`${mapData(data.author)}/${data.pubdate}/${data.publisher}/${data.price}`}</div>
    {/*
      <div>{`${data.summary}`}</div>
    
    */}
    <div className="info_summary">{`${data.summary.slice(0, 180)}...`}</div>
  </React.Fragment>
)

export default SimpleInfo;