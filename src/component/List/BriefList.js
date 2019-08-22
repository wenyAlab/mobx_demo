import React from 'react';
import { Image, Grid } from 'semantic-ui-react';

import './index.css';

const BriefList = ({data}) => (
    <Grid>
      {
        data&&data.map(i => (
          <Grid.Column key={i.id} width={5}>
            <Image
            src={i.image}
            className="columns_image"
            />
            <div className="columns_title">
              {i.title}
            </div>
          </Grid.Column>
        ))
      }
    </Grid>
)

export default BriefList