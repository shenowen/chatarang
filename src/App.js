import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  state = {
    user: {},

  }

  signedIn = () =>{
    return this.state.user.uId
  }

  handleAuth = () =>{
    this.setState({ 
      user: {        
        uid: '123123',
        userName: "Ree",
        email: 'stephen@whoa.org',
      }
    })
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn()
          ? <Main user={this.state.user} />
          : <SignIn />
        }
      </div >
    )
  }
}

export default App