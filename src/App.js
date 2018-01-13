import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import 'bulma/css/bulma.css'

import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import Main from './components/Main'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { message: undefined, messageType: 'is-danger' }
  }

  displayMessage(message, type) {
    this.setState({message, messageType: type})
  }

  render() {
    return (
      <div className="App">
        {this.state.message !== undefined &&
          <div className={'notification is-overlay ' + this.state.messageType}>
            {this.state.message}
          </div>
        }

        <Route exact path="/" component={Main} {...this.props} />
        <div className="hero is-fullheight">
          <div className="hero-body">
            <div className="column is-6 is-offset-3">
              <Route path="/sign_in" render={props => 
                <LoginForm displayMessage={this.displayMessage.bind(this)}  {...props} 
                />} 
              />
              <Route path="/sign_up" render={props => 
                <SignUpForm displayMessage={this.displayMessage.bind(this)} {...props}
                />} 
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
