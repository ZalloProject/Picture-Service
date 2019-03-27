/* eslint-disable no-underscore-dangle */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Pictures = ({ data }) => {
  const divStyle = {
    height: '458px',
    width: '900px',
    display: 'flex',
    flexFlow: 'column wrap',
    overflow: 'scroll',
  };
  const smallStyle = {
    height: '225px',
    width: '225px',
    margin: '1px 1px 1px 1px',
  };
  if (data.length > 0) {
    const first = data.shift();
    const list = data.reduce((acc, curr) => {
      acc.push((
        <img key={curr._id} src={curr.url} alt="house" style={smallStyle} />
      ));
      return acc;
    }, []);
    list.unshift((
      <img key={first._id} src={first.url} style={{ height: '452.5px', width: '456px', marginRight: '1px' }} alt="house" />
    ));
    return (
      <div style={divStyle}>
        {list}
      </div>
    );
  }
  return null;
};
export default Pictures;
