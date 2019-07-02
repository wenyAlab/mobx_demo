import React from 'react';

import './list.css';
import TagList from './TagList';
import HorizontalList from './HorizontalList';
import {bookData } from './mock';

const tagList = [
  '文学',
  '流行',
  '文化',
  '生活',
];

class RightSide extends React.Component{

  render(){
    return (
      <React.Fragment>
        <div style={{marginBottom:20}}>
          <h3>热门标签</h3>
          {
            tagList.map(i=>(<TagList title={i}/>))
          }
        </div>
        <div>
          <h3>豆瓣图书 250</h3>
          <HorizontalList data={bookData.books}/>
        </div>
      </React.Fragment>

    )
  }
}

export default RightSide;