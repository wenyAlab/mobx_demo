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
      <div style={{backgroundColor: '#e9e9e2'}}>
        <Menu
        pointing
        secondary
        style={{ width: 1000, margin: '0 auto'}}
        >
          <Menu.Item name='home' active={activeKey === 'home'} onClick={this.handleMenuClick} />
          <Menu.Item name='about' active={activeKey === 'about'} onClick={this.handleMenuClick} />
        </Menu>
      </div>
    )
  }
}

export { Header};