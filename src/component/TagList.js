import React from 'react';
import {  Label } from 'semantic-ui-react';

import './list.css';

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

class TagList extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    const { title } = this.props;
    return (
      <React.Fragment>
        <div style={{marginBottom:10}}>{title}</div>
        {colors.map(color => (
          <Label key={color} style={{marginBottom:4}} as='a'>
            {color}
          </Label>
        ))}
      </React.Fragment>

    )
  }
}

export default TagList;