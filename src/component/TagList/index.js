import React from 'react';
import {  Label } from 'semantic-ui-react';

import './index.css';

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
        <div className="tag_list_title">{title}</div>
        {colors.map(color => (
          <Label className="tag_label" key={color} as='a'>
            {color}
          </Label>
        ))}
      </React.Fragment>

    )
  }
}

export default TagList;