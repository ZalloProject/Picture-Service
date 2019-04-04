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
      renderTracker: 0,
    };
    this.poseChange = this.poseChange.bind(this);
  }

  componentWillMount() {
    // fetch('http://localhost:8081/populateDB', {
    //   method: 'GET',
    // }).then(data => console.log(data));
    // 'http://fecservice-env-2.azm7p9njeb.us-east-2.elasticbeanstalk.com/links'
    fetch('http://fecservice-env-2.azm7p9njeb.us-east-2.elasticbeanstalk.com/links', {
      method: 'GET',
    }).then(res => res.json())
      .then((newData) => {
        this.setState({
          data: newData,
        });
      }).catch(err => console.log(err));
  }

  poseChange(e) {
    const { renderTracker } = this.state;
    if (e.target.id === 'right') {
      this.setState({
        renderTracker: renderTracker + 1,
      });
    }
    this.setState({
      pose: e.target.id,
    });
  }

  render() {
    const left = '<';
    const right = '>';
    const { data, pose, renderTracker } = this.state;
    return (
      <div>
        <div className={style.mainContainer}>
          <div className={style.animationContainer}>
            <button type="submit" id="left" onClick={this.poseChange} className={style.leftButton}>{left}</button>
            <Box pose={pose}>
              <Pictures data={data} tracker={renderTracker} />
            </Box>
            <button type="submit" id="right" onClick={this.poseChange} className={style.rightButton}>{right}</button>
          </div>
        </div>
        <div className="takeOverPage" />
      </div>
    );
  }
}

export default App;
