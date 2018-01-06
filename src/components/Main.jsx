import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <div className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Awake</h1>
            <h2 className="subtitle">where you start to wake up earlier</h2>
            <div className="field is-grouped">
              {this.props.jwt !== undefined &&
                <div className="control">
                  <Link to="/sign_in" className="button">Sign In</Link>
                </div>
              }
              {this.props.jwt !== undefined &&
                <div className="control">
                  <Link to="/sign_up" className="button is-dark">Sign Up</Link>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main