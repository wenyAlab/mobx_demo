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
          <Image
          src={i.image&&i.image}
          style={{width: '90px', height: '126px'}}
          />
          <List.Content>
            <List.Header as='a' href={`${i.url}?id=${i.id}&apikey=0b2bdeda43b5688921839c8ecb20399b`}>{i.title}</List.Header>
            <List.Description>
              {
                i.origin_title&&
                <span className='origin_title'>{i.origin_title}</span> 

              }
              <div className='appList_translator'>{`${mapData(i.author)}/${mapData(i.translator)}/${i.publisher}/${i.pubdate}/${i.price}`}</div>
              <div className='appList_rating'>
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