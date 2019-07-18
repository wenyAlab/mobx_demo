import React from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import './index.css';

@withRouter
class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeKey: 'book',
    }
  }

  handleMenuClick = (e, {name}) => {
    const { history} = this.props;
    this.setState({
      activeKey: name,
    })
    name==='book'&&history.push('/');
    name==='music'&&history.push('/about');
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
          <Menu.Item name='book' active={activeKey === 'book'} onClick={this.handleMenuClick}>
              图书
          </Menu.Item>
          <Menu.Item name='music' active={activeKey === 'music'} onClick={this.handleMenuClick}>
              音乐
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export { Header};