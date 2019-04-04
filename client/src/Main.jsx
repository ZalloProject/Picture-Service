/* eslint-disable no-return-assign */
/* eslint-disable import/extensions */
import React, { Component } from 'react';

import Pictures from './components/Pictures.jsx';
import style from './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    this.rightRef = React.createRef();
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
  }

  componentWillMount() {
    // fetch('http://localhost:8081/populateDB', {
    //   method: 'GET',
    // }).then(data => console.log(data));
    fetch('http://fecservice-env-2.azm7p9njeb.us-east-2.elasticbeanstalk.com/links', {
      method: 'GET',
    }).then(res => res.json())
      .then((newData) => {
        this.setState({
          data: newData,
        });
      }).catch(err => console.log(err));
  }

  scrollRight() {
    this.rightRef.scrollLeft += 500;
  }

  scrollLeft() {
    this.rightRef.scrollLeft -= 500;
  }

  render() {
    const left = '<';
    const right = '>';
    const { data } = this.state;
    return (
      <div>
        <div className={style.mainContainer} ref={r => this.rightRef = r}>
          <button type="submit" id="left" onClick={this.scrollLeft} className={style.leftButton}>{left}</button>
          <Pictures data={data} />
          <button type="submit" id="right" onClick={this.scrollRight} className={style.rightButton}>{right}</button>
        </div>
      </div>
    );
  }
}

export default App;
