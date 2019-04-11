/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import style from '../style.css';
//function to parse incoming photo data into image elements
const listParser = (data, fn) => {
  const newData = [...data];
  const first = newData.shift();
  let index = 0;
  const list = newData.reduce((acc, curr) => {
    acc.push((
      <img onClick={fn} key={curr._id} id={index += 1} src={curr.url} alt="house" className={style.smallImages} />
    ));
    return acc;
  }, []);
  list.unshift((
    <img onClick={fn} key={first._id} id={0} src={first.url} className={style.firstImage} alt="house" />
  ));
  return list;
};

export default listParser;
