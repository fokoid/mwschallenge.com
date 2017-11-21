import React, {Component} from 'react'
import {render} from 'react-dom'
import './style.css'

class App extends Component {
  state = {
    title: 'MWS Challenge'
  }

  render = () => (
    <div>
      <h1>{this.state.title}</h1>
    </div>
  )
}

export default App
