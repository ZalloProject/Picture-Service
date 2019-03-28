/* eslint-disable import/extensions */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Pictures from './components/Pictures.jsx';
import Box from './components/testing.jsx';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      pose: 'left',
    };
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
  }

  componentWillMount() {
    fetch('http://localhost:3000/links', {
      method: 'GET',
    }).then(res => res.json())
      .then((newData) => {
        this.setState({
          data: newData,
        });
      });
  }

  leftClick() {
    this.setState({
      pose: 'left',
    });
  }

  rightClick() {
    this.setState({
      pose: 'right',
    });
  }

  render() {
    const divStyle = {
      height: '458px',
      width: '962px',
      overflow: 'hidden',
    };
    const { data, pose } = this.state;
    const leftButtonStyle = {
      position: 'fixed',
      top: '225px',
    };
    const rightButtonStyle = {
      position: 'fixed',
      top: '225px',
      left: '850px',
    };
    return (

      <div style={divStyle}>
        <button type="submit" onClick={this.leftClick} style={leftButtonStyle}>left</button>
        <Box pose={pose}>
          <Pictures data={data} />
        </Box>
        <button type="submit" onClick={this.rightClick} style={rightButtonStyle}>right</button>
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
