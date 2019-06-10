import React from 'react';
import { observer, inject} from 'mobx-react';
import {  Image, List} from 'semantic-ui-react';
import { RatingComponent } from './Rating';

const mapData = (arr) => {
  return arr&&arr.length>0?arr.map(i=> i):'';
}
@inject('todos')
@observer
class AppList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      addText:'',
    }
  }

  render(){
    const { bookList} = this.props;
    return (
      bookList&&bookList.length>0&&bookList.map(i => (
        <List.Item key={i.id}>
          <Image src={i.image&&i.image} style={{width: '90px', height: '126px'}} />
          <List.Content>
            <List.Header as='a'>{i.title}</List.Header>
            <List.Description>
              <span>{i.origin_title}</span> 
              <div>{`${mapData(i.author)}/${mapData(i.translator)}/${i.publisher}/${i.pubdate}/${i.price}`}</div>
              <div>
                <RatingComponent data={i.rating}/>
              </div>
              
            </List.Description>
          </List.Content>
        </List.Item>
      ))

    )
  }
}

export default AppList;