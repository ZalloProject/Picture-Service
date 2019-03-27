import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/extensions
import Pictures from './components/Pictures.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    fetch('http://localhost:3000/links', {
      method: 'GET',
    }).then(res => res.json())
      .then((data) => {
        this.setState({
          data,
        });
      });
  }

  render() {
    const { data } = this.state;
    return (

      <div>
        <Pictures data={data} />
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
