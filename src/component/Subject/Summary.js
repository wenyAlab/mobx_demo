import React from 'react';
import {BlockRate} from '../Rating/BlockRate';
import {Progress, Grid} from 'semantic-ui-react';
import { GradeProgress} from '../GradeProgress';

import './index.css';
class Summary  extends  React.Component{
  render(){
    const { data } = this.props;
    return (
      data&&
      <div className="subject_content_wrapper">
        {data&&
          <React.Fragment>
            <div className="subject_content">
              <div className="subject_mini_title">
                内容简介······
              </div>
              <div>
                {data.summary}
              </div>
            </div>
            <div className="subject_author">
              <div className="subject_mini_title">
                作者简介······
              </div>
              <div>
                {data.author_intro}
              </div>
            </div>
            <div className="subject_catalog">
              <div className="subject_mini_title">
                目录······
              </div>
              {
                data.catalog&&data.catalog.split(' ').slice(0, 6).map(i =>(
                  <div key={i}>
                  {i}
                  </div>
                ))
              }
              <div>
                  ······（更多）
              </div>
              
            </div>
            <div className="subject_tags">
              <div className="subject_mini_title">
                豆瓣成员常用的标签······
              </div>
              <div className='tags_wrapper'>
                {data.tags&&data.tags.map(i =>(
                  <span className="tags_item" key={i.name} ><a>{i.name}</a></span>
                ))}
              </div>
            </div>
            <div className="subject_series">
              <div className="subject_mini_title">
                丛书信息
              </div>
              <div className='series_wrapper'>
                  {
                    <span className="series_item"><a>{data.series&&data.series.title}</a></span>
                  }
              </div>
            </div>
          </React.Fragment>
        }
      </div>
    )
  }
}

export {Summary};

