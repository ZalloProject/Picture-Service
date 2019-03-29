/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { shallow, mount, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/App.jsx';
import listParser from '../client/src/utils/dataParser.jsx';
import fetch from '../mock.fetch.jsx';

global.fetch = fetch;

configure({ adapter: new Adapter() });


describe('Data parsing function', () => {
  const testData = [{
    _id: 48,
    url:
     'https://s3-us-west-1.amazonaws.com/photosformockzalloproject/49.jpg',
    __v: 0,
  },
  {
    _id: 60,
    url:
     'https://s3-us-west-1.amazonaws.com/photosformockzalloproject/61.jpg',
    __v: 0,
  },
  {
    _id: 71,
    url:
     'https://s3-us-west-1.amazonaws.com/photosformockzalloproject/72.jpg',
    __v: 0,
  },
  {
    _id: 50,
    url:
     'https://s3-us-west-1.amazonaws.com/photosformockzalloproject/51.jpg',
    __v: 0,
  },
  {
    _id: 75,
    url:
     'https://s3-us-west-1.amazonaws.com/photosformockzalloproject/76.jpg',
    __v: 0,
  },
  {
    _id: 52,
    url:
     'https://s3-us-west-1.amazonaws.com/photosformockzalloproject/53.jpg',
    __v: 0,
  },
  {
    _id: 27,
    url:
     'https://s3-us-west-1.amazonaws.com/photosformockzalloproject/28.jpg',
    __v: 0,
  },
  {
    _id: 57,
    url:
     'https://s3-us-west-1.amazonaws.com/photosformockzalloproject/58.jpg',
    __v: 0,
  },
  {
    _id: 25,
    url:
     'https://s3-us-west-1.amazonaws.com/photosformockzalloproject/26.jpg',
    __v: 0,
  }];

  const listTest = listParser(testData);

  test('It should return an array', (done) => {
    expect(Array.isArray(listTest)).toBe(true);
    done();
  });

  test('It should image tags', (done) => {
    expect(listTest[0].type).toBe('img');
    done();
  });

  test('Output length should be same as input length', (done) => {
    expect(listTest.length === testData.length).toBe(true);
    done();
  });
});

describe('App', () => {
  test('It should select the mainContainer class', (done) => {
    expect(shallow(<App />).is('.mainContainer')).toBe(true);
    done();
  });
  test('The state should change when left or right arrow buttons are clicked', (done) => {
    const wrapper = mount(<App />);
    wrapper.find('.rightButton').simulate('click');
    expect(wrapper.state('pose')).toBe('right');
    wrapper.find('.leftButton').simulate('click');
    expect(wrapper.state('pose')).toBe('left');
    done();
  });
});
