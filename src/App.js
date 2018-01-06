import React, { Component } from 'react'
import { instanceOf } from 'prop-types'
import { Route } from 'react-router-dom'
import { withCookies, Cookies } from 'react-cookie'

import 'bulma/css/bulma.css'

import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import Main from './components/Main'

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  componentWillMount() {
    const { cookies } = this.props

    this.setState({
      auth_token: cookies.get('auth_token') || undefined
    })
  }

  displayMessage(message, type) {
    this.setState({message, messageType: type})
  }

  updateJWTToken(jwt) {
    const { cookies } = this.props
    cookies.set('jwt', jwt, { path: '/' })
    this.setState({ jwt })
  }

  render() {
    return (
      <div className="App">
        {this.state.message !== undefined &&
          <div className={"notification is-overlay " + this.state.messageType}>
            {this.state.message}
          </div>
        }

        <Route exact path="/" component={Main} {...this.props} />
        <div className="hero is-fullheight">
          <div className="hero-body">
            <div className="column is-6 is-offset-3">
              <Route path="/sign_in" render={() => 
                <LoginForm onLogin={this.updateJWTToken.bind(this)}
                  displayMessage={this.displayMessage.bind(this)}
                />} 
              />
              <Route path="/sign_up" component={SignUpForm} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withCookies(App)
