import React from 'react';
import { observer, inject} from 'mobx-react';
import {  Image, Grid, List} from 'semantic-ui-react';
import BookListItem from '../BookList'
import MoreDetailColumns from '../MoreDetailColumns'
import RightSide from '../RightLayout';
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
      <React.Fragment>
        <div >
          <Grid>
            <Grid.Column width={10}>
              <List className="book_list">
                <BookListItem bookList={books.booksList.items}/>
              </List>
              {/*
                <MoreDetailColumns
                  data={books.booksList.items}
                  title="新书速递"
                  actions={[
                    {title: '更多', path: '/'},
                    {title: '分类', path: '/web'}
                  ]}
                />
              */}
            </Grid.Column>
            <Grid.Column width={6}>
              <RightSide />
            </Grid.Column>
          </Grid>
        </div>
      </React.Fragment>

    )
  }
}

export default MainContent;