import React from 'react';

import TagList from '../TagList';
import HorizontalList from '../ColumnsList';
import {SimpleList} from '../SimpleList';
import {bookData } from '../mock';
import './index.css';

const tagList = [
  '文学',
  '流行',
  '文化',
  '生活',
];

class RightLayout extends React.Component{

  render(){
    return (
      <React.Fragment>
        <div className="layout_box">
          <h3>热门标签</h3>
          {
            tagList.map(i=>(<TagList key={i} title={i}/>))
          }
        </div>
        <div className="layout_box">
          <h3>畅销图书榜</h3>
          <SimpleList data={bookData.books}/>
        </div>
        <div className="layout_box">
          <h3>豆瓣图书 250</h3>
          <HorizontalList data={bookData.books}/>
        </div>
      </React.Fragment>

    )
  }
}

export default RightLayout;