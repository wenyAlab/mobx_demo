import React from 'react';
import { observer, inject} from 'mobx-react';
import {  Image, Grid, List} from 'semantic-ui-react';

import BookListItem from '../BookList'
import MoreDetailColumns from '../MoreDetailColumns'
import ListBoxWrapper from '../ListBoxWrapper'
import RightSide from '../RightLayout';
import LeftContent from '../LeftContent';
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