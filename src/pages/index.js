import React from 'react';
import { observer, inject} from 'mobx-react';
import {  Image, Grid, List} from 'semantic-ui-react';

import RightSide from '../component/RightLayout';
import LeftContent from '../component/LeftContent';
import './index.css';

@inject('books')
@observer
class MainContent extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    const { books} = this.props;
    books.queryBooksList();
    books.queryEBooksList();
  }

  render(){
    const { books} = this.props;
    return (
        <div className="main_flex_wrapper">
          <LeftContent/>
          <RightSide />
        </div>

    )
  }
}

export default MainContent;