/* eslint-disable import/extensions */
import React, { Component } from 'react';

import Pictures from './components/Pictures.jsx';
import Box from './components/animatedBox.jsx';
import style from './style.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      pose: 'left',
    };
    this.poseChange = this.poseChange.bind(this);
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
      }).catch(err => console.log(err));
  }

  poseChange(e) {
    this.setState({
      pose: e.target.id,
    });
  }

  render() {
    const left = '<';
    const right = '>';
    const { data, pose } = this.state;
    return (
      <div className={style.mainContainer}>
        <div className={style.animationContainer}>
          <button type="submit" id="left" onClick={this.poseChange} className={style.leftButton}>{left}</button>
          <Box pose={pose}>
            <Pictures data={data} />
          </Box>
          <button type="submit" id="right" onClick={this.poseChange} className={style.rightButton}>{right}</button>
        </div>
      </div>
    );
  }
}

export default App;
