import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jwt: localStorage.getItem('authToken') || undefined
    }
  }

  logout () {
    localStorage.removeItem('authToken')
    this.setState({jwt: undefined})
  }

  render() {
    const loginAndSignUp = (
      <div className="field is-grouped">
        <div className="control">
          <Link to="/sign_in" className="button">Sign In</Link>
        </div>
        <div className="control">
          <Link to="/sign_up" className="button is-dark">Sign Up</Link>
        </div>
      </div>
    )

    const logout = (
      <button onClick={this.logout} class="button is-danger">Logout</button>
    )

    return (
      <div className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Awake</h1>
            <h2 className="subtitle">where you start to wake up earlier</h2>
            
            {this.state.jwt === undefined ? loginAndSignUp : logout}
          </div>
        </div>
      </div>
    )
  }
}

export default Main