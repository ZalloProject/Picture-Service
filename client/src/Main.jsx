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
      prevSpot: null,
    };
    this.rightRef = React.createRef();
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.popCurrStart = this.popCurrStart.bind(this);
    this.currChange = this.currChange.bind(this);
    this.closePop = this.closePop.bind(this);
    this.houseView = this.houseView.bind(this);
    window.addEventListener('house_view', this.houseView);
  }
  //fetching links on mount
  componentWillMount() {

    fetch('http://picturescomponent-env.rvmps3ehip.us-east-2.elasticbeanstalk.com/links', {
      method: 'GET',
    }).then(res => res.json())
      .then((newData) => {
        this.setState({
          data: newData,
        });
      }).catch(err => console.log(err));
  }
  //method to refresh the picture component when other microservices trigger it with global event
  houseView() {
    fetch('http://picturescomponent-env.rvmps3ehip.us-east-2.elasticbeanstalk.com/links', {
      method: 'GET',
    }).then(res => res.json())
      .then((newData) => {
        this.setState({
          data: newData,
        });
      }).catch(err => console.log(err));
  }

  //method to set the index of where the pop up will start
  popCurrStart(e) {
    if (window.innerWidth >= 995) {
      this.setState({
        popCurr: e.target.id,
        popCheck: true,
        prevSpot: this.rightRef.scrollLeft,
      });
      //this moves div to pop up if it is scrolled over
      this.rightRef.scrollLeft -= 6750;
    }
  }
  //method to close the pop up
  closePop() {
    const { prevSpot } = this.state;
    this.rightRef.scrollLeft += prevSpot;
    this.setState({
      popCheck: false,
    });
  }
  //method to change the insex of the pop up
  currChange(e) {
    let { popCurr } = this.state;
    const { data } = this.state;
    if (e.target.className === style.next) {
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
  //methods to make the picture div scroll on click
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
      <div className={style.mainDiv}>
        <button
          type="submit"
          id="left"
          onClick={this.scrollLeft}
          className={style.leftButton}
        >
          {left}
        </button>
        <div
          className={style.mainContainer}
          ref={r => this.rightRef = r}
        >
          <Pictures
            data={data}
            scrollRight={this.scrollRight}
            currChange={this.popCurrStart}
          />
          <Popup
            check={popCheck}
            curr={popCurr}
            photos={data}
            change={this.currChange}
            close={this.closePop}
          />
        </div>
        <button
          type="submit"
          id="right"
          onClick={this.scrollRight}
          className={style.rightButton}
        >
          {right}
        </button>
      </div>
    );
  }
}

export default App;
