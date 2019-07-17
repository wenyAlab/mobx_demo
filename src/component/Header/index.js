import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './index.css';


class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeKey: '图书',
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
          <Link to="/" >
            <Menu.Item name='图书' active={activeKey === '图书'} onClick={this.handleMenuClick} />
          </Link>
          <Link to="/about" >
            <Menu.Item name='音乐' active={activeKey === '音乐'} onClick={this.handleMenuClick} />
          </Link>
        </Menu>
      </div>
    )
  }
}

export { Header};