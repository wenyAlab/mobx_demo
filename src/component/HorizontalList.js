import React from 'react'
import { Image, List } from 'semantic-ui-react'

const HorizontalList = ({data}) => (
  <List horizontal>
    {data&&data.map(i => (
      <List.Item style={{marginRight:10}}>
        <Image
        src={i.image}
        style={{width: '90px', height: '126px'}}
        />
        {/*
        
          <List.Content>
            <List.Description>
            {i.title}
          </List.Description>
          </List.Content>
        */}
        <div style={{width:70, textAlign: 'center'}}>
         {i.title}
        </div>
      </List.Item>
    ))}
  </List>
)

// class HorizontalList extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     const { data } = this.props;
//     return (
//       <List horizontal>
//         {data&&data.map(i => (
//           <List.Item>
//             <Image avatar src={i.image} />
//             <List.Content>
//               <List.Header>title</List.Header>
//               Top Contributor
//             </List.Content>
//           </List.Item>
//         ))}
//       </List>
//     )
//   }
// }

export default HorizontalList