import React from 'react'
import SummaryList from '../List/SummaryList';

import './index.css';

const MoreDetailColumns = ({title, actions, style, ...rest}) => (
  <div className="col_two">
    <div style={style&&style} className="box_wrapper">
      <span className="box_title">{title}</span>
      {actions.length>0&&actions.map(i => <a className="action_item" key={i.path} href={i.path}>{`${i.title}>>`}</a>)}
    </div>
    <SummaryList {...rest}/>
  </div>
)

export default MoreDetailColumns