import React from "react";
import logo from "./../../public/images/logo.svg";
// import './App.css';
import axios from "axios";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkApi = () => {
    axios
      .get("/ping")
      .then(res => {
        // console.log(" res &&&&&&", res);
        alert(res.data);
      })
      .catch(error => {
        // console.log("8888888", error);
      });
  };

  render() {
    return (
      <div className="header-main">
        <img src={logo} className="App-logo text-left" alt="logo" />
        <span className="headerText">MERN Stack App: TODO</span>
      </div>
    );
  }
}

export default Header;
