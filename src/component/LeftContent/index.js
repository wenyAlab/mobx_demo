import React from 'react';
import { observer, inject} from 'mobx-react';

import ListBoxWrapper from '../ListBoxWrapper';
import MoreDetailColumns from '../MoreDetailColumns';
import './index.css';

@inject('books')
@observer
class LeftContent extends React.Component {
  render(){
    const { books } = this.props;
    return (
      <div className="main_left">
        <ListBoxWrapper
          data={books.booksList.items}
          title={<h3>新书速递</h3>}
          actions={[
            {title: '更多', path: '/'},
          ]}
        />
        <MoreDetailColumns
          data={books.booksList.items}
          title={<h3>最受关注图书榜</h3>}
          actions={[
            {title: '虚构类', path: '/'},
            {title: '非虚构类', path: '/about'},
          ]}
          style={{marginTop: 60}}
        />
      </div>
    )
  }
}

export default LeftContent;