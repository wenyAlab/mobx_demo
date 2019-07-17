import React from 'react';
import { Image, Grid, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { formatTextLength } from '../method';
import SimpleInfo from '../SimpleInfo';
import './index.css';

// limit 10
const ListBoxWrapper = ({data, title, actions, eBook}) => (
  <div className="col_five">
    <div className="box_wrapper">
      <span className="box_title">{title}</span>
      {actions.length>0&&actions.map(i => <a className="action_item" key={i.path} href={i.path}>{`${i.title}>>`}</a>)}
    </div>
    <Grid>
      {
        data&&data.map(i => (
          <Grid.Column style={{margin: '0 6px 6px 0', paddingRight:0}} key={i.id} width={3}>
            <Link to={`/detail/${i.id}`}>
              <Popup
              content={<SimpleInfo data={i}/>}
              position='right center'
              wide
              style={{height: 230}}
              trigger={<img
                src={i.image}
                className="columns_image"
                />}
              />
              
            </Link>
            <Link to={`/detail/${i.id}`} className="columns_title">
              {formatTextLength(i.title, 5)}
            </Link>
            {!eBook ?
              <div className="columns_author">
                {formatTextLength(i.author[0], 6)}
              </div>:
              <div className="columns_author">
                {`${i.ebook_price}元`}
              </div>
            }
          </Grid.Column>
        ))
      }
    </Grid>
  </div>
)

export default ListBoxWrapper