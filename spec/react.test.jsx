/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { mount, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/Main.jsx';
import listParser from '../client/src/utils/dataParser.jsx';
import fetch from '../mock.fetch.jsx';

global.fetch = fetch;

configure({ adapter: new Adapter() });

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


describe('Data parsing function', () => {

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
  const app = mount(<App />);
  test('The pop up current image index should change on state on image click', (done) => {
    const wrapper = mount(<App />);
    wrapper.setState({ data: testData });
    wrapper.find('.firstImage').simulate('click');
    expect(wrapper.state('popCurr')).toBe('0');
    done();
  });
  test('The popup image index should change on next button click', (done) => {
    const wrapper = mount(<App />);
    wrapper.setState({ data: testData });
    wrapper.find('.firstImage').simulate('click');
    const before = wrapper.state('popCurr');
    wrapper.find('.next').simulate('click');
    const after = wrapper.state('popCurr');
    expect(before === after).toBe(false);
    done();
  });
  test('The photo container should render all images', (done) => {
    const wrapper = mount(<App />);
    wrapper.setState({ data: testData });
    const firstImage = wrapper.find('.firstImage').length;
    const smallImages = wrapper.find('.smallImages').length;
    expect(firstImage + smallImages).toBe(9);
    done();
  });
  test('The photo container buttons should render the correct innerText', (done) => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.leftButton').text()).toBe('<');
    expect(wrapper.find('.rightButton').text()).toBe('>');
    done();
  });
  test('App should call componentWillMount on load', (done) => {
    const spy = jest.spyOn(App.prototype, 'componentWillMount');
    // eslint-disable-next-line no-unused-vars
    const wrapper = mount(<App />);
    expect(spy).toHaveBeenCalled();
    spy.mockReset();
    spy.mockRestore();
    done();
  });
  test('Data should load onto state on load from componentWillMount', (done) => {
    expect(app.state('data').length > 0).toBe(true);
    done();
  });
});
