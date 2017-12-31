import React from 'react'

export default function Button(props) {
  return (
    <div className="field">
      <div className="control">
        <button onClick={props.onClick} 
          className="button is-link">
          {props.title}
        </button>
      </div>
    </div>
  )
}