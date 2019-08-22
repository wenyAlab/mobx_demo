import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import BriefList from '../List/BriefList';

import './index.css';

const ColumnsList = ({title,actions, ...rest}) => (
  <React.Fragment>
    <div className="box_wrapper">
      <span className="box_title">{title}</span>
      {actions.length>0&&actions.map(i => <a className="action_item" key={i.path} href={i.path}>{`${i.title}>>`}</a>)}
    </div>
    <BriefList {...rest}/>
  </React.Fragment>
)

export default ColumnsList