/* eslint-disable import/extensions */
import React, { Component } from 'react';

import Pictures from './components/Pictures.jsx';
import Box from './components/animatedBox.jsx';


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
    // fetch('http://localhost:3000/populateDB', {
    //   method: 'GET',
    // }).then(data => console.log(data));
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
    const { data, pose } = this.state;
    return (
      <div className="mainContainer">
        <div className="animationContainer">
          <button type="submit" onClick={this.leftClick} className="leftButton">left</button>
          <Box pose={pose}>
            <Pictures data={data} />
          </Box>
          <button type="submit" onClick={this.rightClick} className="rightButton">right</button>
        </div>
      </div>
    );
  }
}

export default App;
