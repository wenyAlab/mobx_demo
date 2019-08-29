import React from 'react';
import {BlockRate} from '../Rating/BlockRate';
import {Progress, Grid} from 'semantic-ui-react';
import { GradeProgress} from '../GradeProgress';

import './index.css';

class Summary  extends  React.Component{
  render(){
    const { data } = this.props;
    console.log(data)
    return (
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
              <div>
                {data.catalog}
              </div>
            </div>
          </React.Fragment>
        }
      </div>
    )
  }
}

export {Summary};

