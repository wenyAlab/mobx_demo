import React from 'react';
import './index.css';

const GradeProgress = ({percent}) => (
  <span className="progress_item" style={{width: `${percent}px`}}/>
)

export {GradeProgress}