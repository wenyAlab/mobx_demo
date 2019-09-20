import React from 'react';
import {BlockRate} from '../Rating/BlockRate';
import {Progress, Grid} from 'semantic-ui-react';
import { GradeProgress} from '../GradeProgress';

import './index.css';

const data = {
  average: 9,
  numRaters: 9
}
class Subject  extends  React.Component{
  render(){
    const { data } = this.props;
    return (
      <div className="subject_wrapper clearfix">
        {data&&
          <React.Fragment>
          <div className="subject">
            <div className="subject_avatar">
              <img src={data.image&&data.image} alt="book_avatar"/>
            </div>
            <div className="subject_info">
              <span>作者：<a>{data.author&&data.author[0]}</a></span><br/>
              <span>出版社：{data.publisher&&data.publisher}</span><br/>
              <span>原作名：{data.origin_title&&data.origin_title}</span><br/>
              <span>译者：<a>{data.translator&&data.translator[0]}</a></span><br/>
              <span>出版年：{data.pubdate&&data.pubdate}</span><br/>
              <span>页数：{data.pages&&data.pages}</span><br/>
              <span>定价：{data.price&&data.price}</span><br/>
              <span>装帧：{data.binding&&data.binding}</span><br/>
              <span>丛书：<a>{data.series&&data.series.title}</a></span><br/>
              <span>ISBN：{data.isbn13&&data.isbn13}</span>
            </div>
          </div>
          <div className="subject_rate">
            <div>豆瓣评分</div>
            <div>
              <BlockRate data={data.rating&&data.rating}/>
            </div>
            <div>
              <ul className="rate_progress_list">
                <li>5星  <GradeProgress percent={57}/> 57.0%</li>
                <li>4星  <GradeProgress percent={35.4}/> 35.4%</li>
                <li>3星  <GradeProgress percent={6.9}/> 6.9%</li>
                <li>2星  <GradeProgress percent={0.5}/> 0.5%</li>
                <li>1星  <GradeProgress percent={0.2}/> 0.2%</li>
              </ul>
            </div>
          </div>
          </React.Fragment>
        }
      </div>
    )
  }
}

export {Subject};

