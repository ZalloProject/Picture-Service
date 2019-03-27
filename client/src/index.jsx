import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor() {
    super()
  }
  // componentWillMount() {
  //   fetch('http://localhost:3000/populateDB', {
  //     method: 'GET'
  //   })
  // }
  render() {
    return (
    <div>
      <p>Hopefully this works?!!?!?!</p>
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));