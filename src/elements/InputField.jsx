import React, { Component } from 'react'

class InputField extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.props.onChange(name, value)
  }

  render() {
    return  (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <input name={this.props.name} onChange={this.handleChange} value={this.props.value} className="input" type={this.props.type || 'text'}/>
      </div>
    )
  }
}

export default InputField