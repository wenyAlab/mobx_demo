import React from 'react';
import { Menu } from 'semantic-ui-react';
import './index.css';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeKey: 'store',
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
          <Menu.Item name='store' active={activeKey === 'store'} onClick={this.handleMenuClick} />
          <Menu.Item name='ebook' active={activeKey === 'ebook'} onClick={this.handleMenuClick} />
        </Menu>
      </div>
    )
  }
}

export { Header};