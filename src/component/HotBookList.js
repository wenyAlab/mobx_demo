import React from 'react';
import { Image, List } from 'semantic-ui-react'

const HotBookList = ({data}) => (
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
)

export {
  HotBookList
}