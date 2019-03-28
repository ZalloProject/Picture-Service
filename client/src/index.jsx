import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/extensions
import Pictures from './components/Pictures.jsx';
import Box from './components/testing.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      pose: 'left',
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
    const divStyle = {
      height: '458px',
      width: '962px',
      overflow: 'scroll',
    };
    const { data, pose } = this.state;
    return (

      <div style={divStyle}>
        <Box pose={pose}>
          <Pictures data={data} />
        </Box>
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
