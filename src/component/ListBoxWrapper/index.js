import React from 'react'
import { Image, Grid } from 'semantic-ui-react'
import './index.css';

const formatTitle = (title) => {
  let finalText;
  if (title.length>5){
    finalText = title.slice(0, 5) + '...';
  } else {
    finalText = title;
  }
  return finalText;
}
const formatAuthor = (author) => {
  let finalText;
  if (author.length>6){
    finalText = author.slice(0, 6) + '...';
  } else {
    finalText = author;
  }
  return finalText;
}
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
            <a className="columns_title">
              {formatTitle(i.title)}
            </a>
            <div className="columns_author">
              {formatAuthor(i.author[0])}
            </div>
          </Grid.Column>
        ))
      }
    </Grid>
  </React.Fragment>
)

export default ListBoxWrapper