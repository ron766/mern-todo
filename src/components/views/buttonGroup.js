import React from 'react';
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  checkApi = () => {
    axios
      .get("/ping")
      .then(res => {
          console.log(" res &&&&&&", res);
          alert(res.data)
      })
      .catch(error => {
          console.log("8888888", error);
      });
    }

  render() {
    return (
        <div className="btgrp">
          <div className="row row2">
            <div className="col-sm-2 col-sm-offset-2  ">
              <span id="todo-count">kjbkijb</span>
            </div>
            <div className="col-sm-4 " >
              <ul className="list-inline" id="filters">
                <li>
                  <a className="btn btn-sm allBtn aactive" href="#/">All</a>
                </li>
                <li>
                  <a className="btn btn-sm activeBtn" href="#/">Active
                    <span className="badge badge-info"></span>
                  </a>
                </li>
                <li>
                  <a className="btn btn-sm completedBtn" href="#/">Completed</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2  ">
              <button className="btn btn-sm btn-success" id="clear-completed">Clear completed
              </button>
            </div>
          </div>
            <div className="row row3">
              <div className="col-sm-4 col-sm-offset-2">
                <button className="btn btn-default btn-lg" id="toggle-all">
                  <i className="glyphicon glyphicon-check"></i>
                </button> Mark all as complete<br />
                <button className="btn btn-default btn-lg" id="toggle-none">
                  <i className="glyphicon glyphicon-unchecked"></i>
                </button> Unmark all
              </div>
              <div className="col-sm-4 text-right">
              </div>
            </div>
        </div>
    )
  }
}

export default App;
