import React from 'react';

import GradList from  '../List/GradList';
import './index.css';

// limit 10
const ListBoxWrapper = ({title, actions, ...rest}) => (
  <div className="col_five">
    <div className="box_wrapper">
      <span className="box_title">{title}</span>
      {actions.length>0&&actions.map(i => <a className="action_item" key={i.path} href={i.path}>{`${i.title}>>`}</a>)}
    </div>
    <GradList {...rest}/>
  </div>
)

export default ListBoxWrapper