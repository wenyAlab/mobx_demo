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
    console.log(data)
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
              <span>原作名：{data.publisher&&data.origin_title}</span><br/>
              <span>译者：<a>{data.publisher&&data.translator[0]}</a></span><br/>
              <span>出版年：{data.publisher&&data.pubdate}</span><br/>
              <span>页数：{data.publisher&&data.pages}</span><br/>
              <span>定价：{data.publisher&&data.price}</span><br/>
              <span>装帧：{data.publisher&&data.binding}</span><br/>
              <span>ISBN：{data.publisher&&data.isbn13}</span>
            </div>
          </div>
          <div className="subject_rate">
            <div>豆瓣评分</div>
            <div>
              <BlockRate data={data.rating&&data.rating}/>
            </div>
            <div>
              <ul className="rate_progress_list">
                <li>5星  <GradeProgress percent={50}/> 50%</li>
                <li>4星  <GradeProgress percent={10}/> 10%</li>
                <li>3星  <GradeProgress percent={20}/> 20%</li>
                <li>2星  <GradeProgress percent={8}/> 8%</li>
                <li>1星  <GradeProgress percent={12}/> 12%</li>
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

