import React from 'react';
import {  Label } from 'semantic-ui-react';

import './index.css';

const colors = [
  '小说',
  '随笔',
  '日本文学',
  '散文',
  '诗歌',
  '童话',
  '名著',
  '科幻',
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
        <div className="tag_collections">
          {colors.map(color => (
            <Label className="tag_label" key={color} as='a'>
              {color}
            </Label>
          ))}
          <Label className="tag_label" as='a'>
            更多>>
          </Label>
        </div>
      </React.Fragment>

    )
  }
}

export default TagList;