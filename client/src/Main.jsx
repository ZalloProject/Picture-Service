/* eslint-disable no-return-assign */
/* eslint-disable import/extensions */
import React, { Component } from 'react';

import Pictures from './components/Pictures.jsx';
import Popup from './components/Popup.jsx';
import style from './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      popCurr: null,
      popCheck: false,
    };
    this.rightRef = React.createRef();
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.popCurrStart = this.popCurrStart.bind(this);
    this.currChange = this.currChange.bind(this);
    this.closePop = this.closePop.bind(this);
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

  popCurrStart(e) {
    this.setState({
      popCurr: e.target.id,
      popCheck: true,
    });
  }

  closePop() {
    this.setState({
      popCheck: false,
    });
  }

  currChange(e) {
    let { popCurr } = this.state;
    const { data } = this.state;
    if (e.target.id === 'next') {
      popCurr = Number(popCurr) + 1;
    } else {
      popCurr = Number(popCurr) - 1;
    }
    if (popCurr > 0 && popCurr < data.length) {
      this.setState({
        popCurr,
      });
    }
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
    const { data, popCheck, popCurr } = this.state;
    return (
      <div>
        <div className={style.mainContainer} ref={r => this.rightRef = r}>
          <button type="submit" id="left" onClick={this.scrollLeft} className={style.leftButton}>{left}</button>
          <Pictures
            data={data}
            scrollRight={this.scrollRight}
            currChange={this.popCurrStart}
          />
          <button
            type="submit"
            id="right"
            onClick={this.scrollRight}
            className={style.rightButton}
          >
            {right}
          </button>
          <Popup
            check={popCheck}
            curr={popCurr}
            photos={data}
            change={this.currChange}
            close={this.closePop}
          />
        </div>
      </div>
    );
  }
}

export default App;
