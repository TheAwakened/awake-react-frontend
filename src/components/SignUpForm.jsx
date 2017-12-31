import React, { Component } from 'react'
import InputField from '../elements/InputField'
import Button from '../elements/Button'
import { ENDPOINT } from '../constant'

class SignUpForm extends Component {
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
      'user': this.state
    })

    console.log(body)

    fetch(ENDPOINT + 'users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body
    }).then(res => {
      return res.json()
    }).then(data => {
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="box">
        <h1 className="title">Sign Up</h1>
        <InputField onChange={this.handleChange} value={this.state.username} name="username" label={'Username'} />
        <InputField onChange={this.handleChange} value={this.state.password} name="password" label={'Password'} type='password' />
        <Button onClick={(e) => this.handleSubmit(e)} title="Sign Up" />
      </div>
    )
  }
}

export default SignUpForm