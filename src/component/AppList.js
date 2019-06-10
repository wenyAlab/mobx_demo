import React from 'react';
import { observer, inject} from 'mobx-react';
import {  Image, Grid, List} from 'semantic-ui-react';
import BookListItem from './BookListItem'
import {bookData } from './mock';
@inject('todos')
@observer
class AppList extends React.Component{
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

        <div style={{width: '1000px',margin: '0 auto'}}>
          <Grid>
            <Grid.Column width={10}>
              <List divided verticalAlign='middle'>            
                <BookListItem bookList={bookData.books}/>
              </List>
            </Grid.Column>
            <Grid.Column width={6}>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
          </Grid>
        </div>
      </React.Fragment>

    )
  }
}

export default AppList;