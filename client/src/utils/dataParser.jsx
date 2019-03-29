/* eslint-disable no-underscore-dangle */
import React from 'react';

const listParser = (data) => {
  const newData = [...data];
  const first = newData.shift();

  const list = newData.reduce((acc, curr) => {
    acc.push((
      <img key={curr._id} src={curr.url} alt="house" className="smallImages" />
    ));
    return acc;
  }, []);
  list.unshift((
    <img key={first._id} src={first.url} className="firstImage" alt="house" />
  ));
  return list;
};

export default listParser;
