import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import 'bulma/css/bulma.css'

import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import Main from './components/Main'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { message: undefined }
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
              <Route path="/sign_in" render={() => 
                <LoginForm displayMessage={this.displayMessage.bind(this)}
                />} 
              />
              <Route path="/sign_up" render={() => 
                <SignUpForm displayMessage={this.displayMessage.bind(this)}
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
