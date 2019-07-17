import React from 'react';
import { Image, List } from 'semantic-ui-react'

const SimpleList = ({data, title, actions}) => (
  <React.Fragment>
    <div className="box_wrapper">
      <span className="box_title">{title}</span>
      {actions.length>0&&actions.map(i => <a className="action_item" key={i.path} href={i.path}>{`${i.title}>>`}</a>)}
    </div>
    <List divided relaxed as='ol'>
      {data&&data.map(i => (
        <List.Item key={i.id} as='li'>
          <List.Content>
            <List.Header as='a'>{i.title}</List.Header>
            <List.Description>{i.author}</List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  </React.Fragment>
)

export {
  SimpleList
}