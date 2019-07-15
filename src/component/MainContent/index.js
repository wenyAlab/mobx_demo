import React from 'react';
import { observer, inject} from 'mobx-react';
import {  Image, Grid, List} from 'semantic-ui-react';
import BookListItem from '../BookList'
import MoreDetailColumns from '../MoreDetailColumns'
import {bookData } from '../mock';
import RightSide from '../RightLayout';
import './index.css';

@inject('todos')
@observer
class MainContent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      addText:'',
    }
  }
  addTitle = (value)=> {
    const { todos} = this.props;

    todos.addTitle(value)
  }

  changeText = (e) => {
    this.setState({
      addText:e.target.value,
    })
  }
  render(){
    const { todos} = this.props;
    return (
      <React.Fragment>
        {/*
          {
            todos.titleList&&
            todos.titleList.length>0&&
            todos.titleList.map(i => (
              <div
                key={i.id&&i.id}
                style={i.isDone?{color: '#CCC', textDecoration: 'line-through'}:{}}
                onClick={() => todos.changeDoneStatus(i.text)}
              >
                {i.text}
              </div>
            ))
          }
          <Input onChange={this.changeText} placeholder="输入todo" />
          <Button content='add' onClick={()=>this.addTitle(this.state.addText)} />
        */}

        <div >
          <Grid>
            <Grid.Column width={10}>
              <List className="book_list">
                <BookListItem bookList={bookData.books}/>
              </List>
              <MoreDetailColumns
                data={bookData.books}
                title="新书速递"
                actions={[
                  {title: '更多', path: '/'},
                  {title: '分类', path: '/'}
                ]}
              />
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