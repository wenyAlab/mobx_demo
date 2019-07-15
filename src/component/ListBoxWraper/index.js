import React from 'react'
import { Image, Grid } from 'semantic-ui-react'
// import './index.css';
import '../ColumnsList/index.css';

// limit 10
const ListBoxWrapper = ({data, title, actions}) => (
  <React.Fragment>
    <div className="box_wrapper">
      <span className="box_title">{title}</span>
      {actions.length>0&&actions.map(i => <a className="action_item" key={i.path} href={i.path}>{`${i.title}>>`}</a>)}
    </div>

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
  </React.Fragment>
)

export default ListBoxWrapper