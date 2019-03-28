/* eslint-disable no-underscore-dangle */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Pictures = ({ data }) => {
  const divStyle = {
    height: '458px',
    display: 'flex',
    flexFlow: 'column wrap',
  };
  const smallStyle = {
    height: '226px',
    width: '225px',
    margin: '1px 1px 1px 1px',
  };
  const largeStyle = {
    height: '453.5px',
    width: '456px',
    marginTop: '1px',
    marginRight: '1px',
  };
  if (data.length > 0) {
    const newData = [...data];
    const first = newData.shift();

    const list = newData.reduce((acc, curr) => {
      acc.push((
        <img key={curr._id} src={curr.url} alt="house" style={smallStyle} />
      ));
      return acc;
    }, []);
    list.unshift((
      <img key={first._id} src={first.url} style={largeStyle} alt="house" />
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
