import React from 'react';
import axios from 'axios'

import Header from './../views/header'
import Tasks from './../views/tasks'
import ButtonGroup from './../views/buttonGroup'


class App extends React.Component {
  constructor(props){
		super(props)
		this.state = {
      tasks : []
    }
  }

  componentDidMount () {
    let self = this
    axios
      .get("/getTasks")
      .then(res => {
        console.log(" res &&&&&&", res);
        self.setState({ tasks: res.data})
        // alert(res.data)
      })
      .catch(error => {
        console.log("8888888", error);
      });
  }

  checkApi = () => {
    axios
      .get("/getTasks")
      .then(res => {
        console.log(" res &&&&&&", res);
        alert(res.data)
      })
      .catch(error => {
        console.log("8888888",error);
      });
  }

  render () {
    return (
      <div className="App">
        <Header />
        <ButtonGroup />
        <Tasks tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default App;
