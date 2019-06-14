import React from "react";
import "./header.less";
import { Row, Col } from "antd";
import { Menu, Dropdown, Icon } from "antd";
import Axios from "../../axios/index";
import { connect } from "react-redux";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: ""
    };
  }
  componentDidMount() {
    this.getWeather();
  }
  getWeather() {
    Axios.jsonp({
      url: `http://v.juhe.cn/weather/index?format=2&cityname=上海&key=9d8c97c5759727c32f5b3012445150b0`
    }).then(rs => {
      if (rs.resultcode == 200) {
        this.setState({
          weather: rs.result.today
        });
      }
    });
  }

  render() {
    const { menuName, menuType } = this.props;
    return (
      <div className="contaior">
        <div className="header">
          <span className="userInfo">欢迎您,小哥哥</span>
          <a href="#" className="exit">
            退出
          </a>
          <span>
            {this.state.weather.weather
              ? this.state.weather.weather
              : `接口失效`}{" "}
            {this.state.weather.weather ? this.state.weather.temperature : ""}
          </span>
        </div>

        <div className="CrumbsTitle">
          <span>{menuName || "首页"}</span>
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    menuName: state.menuName
  };
})(Header);
