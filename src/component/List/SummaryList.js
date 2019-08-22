import React from 'react'
import { Image, List,Rating,Label } from 'semantic-ui-react';

import './index.css';

const SummaryList = ({data}) => (
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
                <div className='item_tags'>
                  {i.ebook_url && <Label>有电子书</Label>}
                </div>

              </div>
            </List.Content>
            <p className="book_item_summary">{`${i.summary.slice(0, 24)}...`}</p>
          </List.Item>
        ))
      }
    </List>
)

export default SummaryList