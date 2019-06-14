import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Admin from "./Admin.js";
class App extends React.Component{
    render(){
        return <div>{this.props.children}</div>;
    }
}
export default App;
