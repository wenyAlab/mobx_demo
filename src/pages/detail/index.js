import React from 'react';
import { observer, inject} from 'mobx-react';
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
    return (books.booksDetail&&<h2>{books.booksDetail.title}</h2>)
  }
}

export default Detail;