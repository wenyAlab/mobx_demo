import React from 'react';
import { Grid, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { formatTextLength } from '../method';
import SimpleInfo from '../SimpleInfo';
import './index.css';

// limit 10
const GradList = ({data, eBook}) => (
    <Grid>
      {
        data&&data.map(i => (
          <Grid.Column className="grad_list_colums" key={i.id} width={3}>
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
)

export default GradList