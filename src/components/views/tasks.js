import React from "react";
// import axios from "axios";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {};
  }

  handleClicks = (e) => {
    console.log(" e -------", e.target.id)
    // reset text
    if (e.target.id === "clearText") {
      this.myRef.current.value = ""
    }
  };

  render() {
    console.log("ppppppppppppp",this.props.tasks)
    return (
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <div className="input-group input-group-lg">
            <span className="input-group-btn">
              <button className="btn btn-success btn-lg clearTextBtn" id="clearText" onClick={this.handleClicks}>
                <i className="glyphicon glyphicon-chevron-right glyph-r" id="clearText"></i>
              </button>
            </span>
            <span id="todo-form" action="/addtask" method="post">
              <input className="form-control input-lg" name="taskInput" id="new-todo" placeholder="What needs to be done?" autoFocus="" ref={this.myRef}/>
            </span>
            <span className="input-group-btn">
              <button className="btn btn-default btn-lg" id="addToDo" type="submit">
                <i className="glyphicon glyphicon-plus"></i>
              </button>
            </span>
          </div>
        </div>
      </div>  
    )
  }
}

export default Header;
