import React from 'react';
import { Menu } from 'semantic-ui-react';
import './index.css';

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
      <div className="header_wrapper">
        <Menu
        pointing
        secondary
        className="header_menu"
        >
          <Menu.Item name='豆瓣书店' active={activeKey === 'home'} onClick={this.handleMenuClick} />
          <Menu.Item name='电子图书' active={activeKey === 'about'} onClick={this.handleMenuClick} />
        </Menu>
      </div>
    )
  }
}

export { Header};