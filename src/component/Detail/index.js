import React from 'react';
import { observer, inject} from 'mobx-react';
@inject('books')
@observer
class Detail extends React.Component{
  componentDidMount(){
    const { books } = this.props;
    const payload = {
      id: 1770782,
    }
    books.queryBooksDetail(payload);
  }
  render(){
    return (<h2>detail</h2>)
  }
}

export default Detail;