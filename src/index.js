import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import './index.css'
import registerServiceWorker from './registerServiceWorker'

// Components
import App from './App'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import Main from './components/Main'

const router = (
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Main} />

      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="column is-6 is-offset-3">
            <Route path="/sign_in" component={LoginForm} />
            <Route path="/sign_up" component={SignUpForm} />
          </div>
        </div>
      </div>

    </App>
  </BrowserRouter>
)
ReactDOM.render(
  router,
  document.getElementById('root')
)

registerServiceWorker()
