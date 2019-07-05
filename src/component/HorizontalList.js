import React from 'react'
import { Image, List, Grid } from 'semantic-ui-react'

const HorizontalList = ({data}) => (
  <Grid>
    {
      data&&data.map(i => (
        <Grid.Column width={5}>
          <Image
          src={i.image}
          style={{width: '90px', height: '126px'}}
          />
          <div style={{width: '100%', textAlign: 'center',marginTop: 6}}>
            {i.title}
          </div>
        </Grid.Column>
      ))
    }
  </Grid>
)

export default HorizontalList