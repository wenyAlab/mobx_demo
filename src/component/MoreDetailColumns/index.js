import React from 'react'
import { Image, Grid, List,Rating } from 'semantic-ui-react'
// import './index.css';
import './index.css';

const MoreDetailColumns = ({data, title, actions}) => (
  <React.Fragment>
    <div className="box_wrapper">
      <span className="box_title">{title}</span>
      {actions.length>0&&actions.map(i => <a className="action_item" key={i.path} href={i.path}>{`${i.title}>>`}</a>)}
    </div>
    <List horizontal verticalAlign='top'>
      {
        data.length>0&&data.map(i => (
          <List.Item id="horizontal_item" key={i.id} >
            <Image className="columns_image" src={i.image} />
            <List.Content>
              <List.Header as='a'>{i.title}</List.Header>
              <div className="down_in_header">
                <div>
                  <Rating 
                    maxRating={5} 
                    disabled
                    defaultRating={(Number(i.rating.average)*5) / 10} 
                    icon='star' 
                    size='mini' 
                  />
                  {i.rating.average}
                </div>
                {
                  i.author&&
                  <span className='origin_title'>{`作者：${i.author}`}</span> 
                }
                <div className='item_tags'>
                  <span>{i.tags[1].title}</span>
                </div>

              </div>
            </List.Content>
          </List.Item>
        ))
      }
    </List>
    

  </React.Fragment>
)

export default MoreDetailColumns