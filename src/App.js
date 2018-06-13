import React, { Component } from 'react'

import './App.css'
import Main from './Main'

class App extends Component {
  state = {
    user: {
      uid: '112313',
      userName: 'OwShen',
      email: 'shenowen36@gmail.com'
    }

  }

  render() {
    return (
      <div className="App">
        <Main user={this.state.user}/>
      </div >
    )
  }
}

export default App