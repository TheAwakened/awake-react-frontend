import React, { Component } from 'react'
import InputField from '../elements/InputField'
import Button from '../elements/Button'
import { ENDPOINT } from '../constant'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange(name, value) {
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const body = JSON.stringify({
      'auth': this.state
    })

    fetch(ENDPOINT + 'authenticate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body
    }).then(res => {
      console.log(res)
      if (res.ok) {
        return res.json()
      }
      const message = 'Invalid email/password.'
      const type = 'is-danger'
      this.props.displayMessage(message, type)

    }).then(({message, jwt}) => {
      const type = 'is-success'
      this.props.displayMessage(message, type)
      
      localStorage.setItem('authToken', jwt)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="box">
        <h1 className="title">Login</h1>
        <InputField onChange={this.handleChange} value={this.state.username} name="username" label={'Username'} />
        <InputField onChange={this.handleChange} value={this.state.password} name="password" label={'Password'} type='password' />
        <Button onClick={(e) => this.handleSubmit(e)} title="Login" />
      </div>
    )
  }
}

export default LoginForm
