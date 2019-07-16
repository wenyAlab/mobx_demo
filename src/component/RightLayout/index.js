import React from 'react';

import TagList from '../TagList';
import ColumnsList from '../ColumnsList';
import {SimpleList} from '../SimpleList';
import {bookData } from '../mock';
import { observer, inject} from 'mobx-react';

import './index.css';

const tagList = [
  '文学',
  '流行',
  '文化',
  '生活',
];

@inject('books')
@observer
class RightLayout extends React.Component{

  render(){
    const { books } = this.props;
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
          <SimpleList data={books.booksList.items}/>
        </div>
        <div className="layout_box">
          <ColumnsList
          data={books.booksList.items}
          title="豆瓣图书 250"
          actions={[
            {title: '更多', path: '/'}
          ]}
          />
        </div>
      </React.Fragment>

    )
  }
}

export default RightLayout;