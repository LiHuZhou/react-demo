import React from "react";
import { Menu, Icon } from "antd";
import "./leftmenu.less";
import menuConfig from "../../config/menuConfig.js";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { switchMenu } from "../../redux/action/index";
const { SubMenu } = Menu;
class LeftMenu extends React.Component {
  componentWillMount() {
    let menuList = this.renderMenu(menuConfig);
    this.setState({
      menuList
    });
  }

  state = {
    currentKey: ""
  };
  //点击菜单
  handleClick = ({ item, key }) => {
    if (key == this.state.currentKey) {
      return false;
    }
    const { dispatch } = this.props;
    dispatch(switchMenu(item.props.title));
    this.setState({
      currentKey: key
    });
  };

  //渲染菜单
  renderMenu = menuList => {
    return menuList.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type="mail" />
                <span />
                {item.title}
              </span>
            }
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key} title={item.title}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="logo">
          <h1>我的网站</h1>
        </div>
        <Menu mode="inline" theme="light" onClick={this.handleClick}>
          {this.state.menuList}
        </Menu>
      </div>
    );
  }
}

export default connect()(LeftMenu);
