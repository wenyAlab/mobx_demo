import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
          <Grid.Column style={{margin: '0 6px 6px 0', paddingRight:0}} key={i.id} width={3}>
            <Link to={`/detail/${i.id}`}>
              <img
              src={i.image}
              className="columns_image"
              />
            </Link>
            <Link to={`/detail/${i.id}`} className="columns_title">
              {formatTitle(i.title)}
            </Link>
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