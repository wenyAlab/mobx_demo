import React from 'react';
import { Menu } from 'semantic-ui-react';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeKey: 'home',
    }
  }

  handleMenuClick = (e, {name}) => {
    this.setState({
      activeKey: name,
    })
  }

  render(){
    const { activeKey} = this.state;
    return (
      <Menu
      pointing
      secondary
      style={{margin: '20px 0'}}
      >
        <Menu.Item name='home' active={activeKey === 'home'} onClick={this.handleMenuClick} />
        <Menu.Item name='about' active={activeKey === 'about'} onClick={this.handleMenuClick} />
      </Menu>
    )
  }
}

export { Header};