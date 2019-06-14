import React from "react";
import Header from "./components/header/header.js";
import LeftMenu from "./components/leftmenu/leftmenu.js";
import Footer from "./components/footer/footer.js";
import Main from "./components/main/main.js";
import { Row, Col } from "antd";

export default class Admin extends React.Component {
  render() {
    return (
      <Row>
        <Col span={4}>
          <LeftMenu />
        </Col>
        <Col span={20}>
          <Header />
          <Row className="content"  style={{height:"200px"}}>{this.props.children}</Row>
        </Col>
      </Row>
    );
  }
}
