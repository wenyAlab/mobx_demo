import React from 'react';
import { observer, inject} from 'mobx-react';

import {Subject} from '../../component/Subject';

@inject('books')
@observer
class Detail extends React.Component{
  componentDidMount(){
    const { books, match } = this.props;
    const payload = {
      id: match.params&&match.params.id,
    }
    books.queryBooksDetail(payload);
  }
  render(){
    const { books } = this.props;
    return (
        <div className="main_flex_wrapper">
          <div className="main_left">
            {
              books.booksDetail&&<h2>{books.booksDetail.title}</h2>
            }
            <Subject/>
          </div>
          <div className="main_right">
          </div>
        </div>
      )
  }
}

export default Detail;