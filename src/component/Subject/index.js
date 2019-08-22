import React from 'react';
import {RatingComponent} from '../Rating';
import {Progress, Grid} from 'semantic-ui-react';
import './index.css';

const data = {
  average: 9,
  numRaters: 9
}
class Subject  extends  React.Component{
  render(){
    return (
      <div className="subject_wrapper">
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <div className="subject">
                <div className="subject_avatar">
                  <img src="https://img3.doubanio.com/view/subject/l/public/s33307240.jpg" alt="book_avatar"/>
                </div>
                <div className="subject_info">
                  <span>测试</span><br/>
                  <span>测试</span><br/>
                  <span>测试</span><br/>
                  <span>测试</span><br/>
                  <span>测试</span>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="subject_rate">
                <div>豆瓣评分</div>
                <div>
                  <RatingComponent data={data}/>
                </div>
                <div>
                  <ul>
                    <li>5星  <Progress percent={44} progress size="small" /></li>
                    <li>4星  <Progress percent={44} progress size="small" /></li>
                    <li>3星  <Progress percent={44} progress size="small" /></li>
                    <li>2星  <Progress percent={44} progress size="small" /></li>
                    <li>1星  <Progress percent={44} progress size="small" /></li>
                  </ul>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
        
      </div>
    )
  }
}

export {Subject};

