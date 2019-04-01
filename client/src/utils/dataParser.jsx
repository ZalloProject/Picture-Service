/* eslint-disable no-underscore-dangle */
import React from 'react';
import style from '../style.css';

const listParser = (data) => {
  const newData = [...data];
  const first = newData.shift();

  const list = newData.reduce((acc, curr) => {
    acc.push((
      <img key={curr._id} src={curr.url} alt="house" className={style.smallImages} />
    ));
    return acc;
  }, []);
  list.unshift((
    <img key={first._id} src={first.url} className={style.firstImage} alt="house" />
  ));
  return list;
};

export default listParser;
