import React from 'react'
import { Image, Grid } from 'semantic-ui-react'
import './index.css';

const ColumnsList = ({data}) => (
  <Grid>
    {
      data&&data.map(i => (
        <Grid.Column key={i.id} width={3}>
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

export default ColumnsList