import React from 'react';
import { observer, inject} from 'mobx-react';
import { Input, Button, Grid} from 'semantic-ui-react';

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

        <div>
          <Grid columns='three' divided>
            <Grid.Row>
              <Grid.Column>
                人间失格<br/>
                太宰治
              </Grid.Column>
              <Grid.Column>
                人间失格<br/>
                太宰治
              </Grid.Column>
              <Grid.Column>
                人间失格<br/>
                太宰治
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                人间失格<br/>
                太宰治
              </Grid.Column>
              <Grid.Column>
                人间失格<br/>
                太宰治
              </Grid.Column>
              <Grid.Column>
                人间失格<br/>
                太宰治
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </React.Fragment>

    )
  }
}

export default AppList;