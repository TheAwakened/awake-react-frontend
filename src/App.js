import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import 'bulma/css/bulma.css'
import './index.css'

import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import Main from './components/Main'

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
)


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      message: undefined, 
      messageType: 'is-danger',
      showMsg: false
    }

    this.displayMessage = this.displayMessage.bind(this)
  }

  displayMessage(message, type) {
    this.setState({message, messageType: type, showMsg: true})
    setTimeout(() => {
      this.setState({showMsg: false})
    }, 2000)
    setTimeout(() => {
      this.setState({message: undefined})
    }, 3000)
  }

  render() {
    return (
      <div className="App">
        <Fade in={this.state.showMsg}>
          <div className={'notification is-overlay ' + this.state.messageType + ' ' + (this.state.showMsg ? '' : 'hide' )}>
            {this.state.message}
          </div>
        </Fade>

        <Route exact path="/" render={props => 
          <Main displayMessage={this.displayMessage} {...props} 
          />}  
        />
        <div className="hero is-fullheight">
          <div className="hero-body">
            <div className="column is-6 is-offset-3">
              <Route path="/sign_in" render={props => 
                <LoginForm displayMessage={this.displayMessage} {...props} 
                />} 
              />
              <Route path="/sign_up" render={props => 
                <SignUpForm displayMessage={this.displayMessage} {...props}
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
