import React from 'react';
import { observer, inject} from 'mobx-react';

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
        {
          todos.titleList&&
          todos.titleList.length>0&&
          // todos.titleList.map(i => <div key={i.text} style={i.isDone?{color: '#CCC', textDecoration: 'line-through'}:{}} onClick={() => todos.changeDoneStatus(i.text)}>{i.text}</div>)
          todos.titleList.map(i => (
            // console.log(i.id)
            <div
              key={i.id&&i.id}
              style={i.isDone?{color: '#CCC', textDecoration: 'line-through'}:{}}
              onClick={() => todos.changeDoneStatus(i.text)}
            >
              {i.text}
            </div>
          ))
        }
        <input onChange={this.changeText} placeholder="输入todo"></input>
        <button onClick={()=>this.addTitle(this.state.addText)}>add</button>
      </React.Fragment>

    )
  }
}

export default AppList;