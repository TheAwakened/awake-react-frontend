import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import registerServiceWorker from './registerServiceWorker'

// Components
import App from './App'

const router = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

ReactDOM.render(
  router,
  document.getElementById('root')
)

registerServiceWorker()
