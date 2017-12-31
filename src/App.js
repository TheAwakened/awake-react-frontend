import React, { Component } from 'react'
import LoginForm from './components/LoginForm'

import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="hero is-fullheight">
          <div class="hero-body">           
            <div className="column is-6 is-offset-3">
              <LoginForm></LoginForm>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
