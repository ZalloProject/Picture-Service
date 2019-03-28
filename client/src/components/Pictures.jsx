/* eslint-disable no-underscore-dangle */
import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const Pictures = ({ data }) => {
  const divStyle = {
    height: '458px',
    // width: '900px',
    display: 'flex',
    flexFlow: 'column wrap',
    // overflow: 'hidden',
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
    const first = data.shift();
    const list = data.reduce((acc, curr) => {
      acc.push((
        <img key={curr._id} src={curr.url} alt="house" style={smallStyle} />
      ));
      return acc;
    }, []);
    list.unshift((
      <img key={first._id} src={first.url} style={largeStyle} alt="house" />
    ));
    console.log(list.length);
    return (
      <div style={divStyle}>
        {list}
      </div>
    );
  }
  return null;
};
export default Pictures;

// import posed from 'react-pose';
// import styled from 'styled-components';

// const Box = styled(posed.div({
//   top: {x: 50},
//   bottom: {x: 300}
// }))`
//   background-color: #f9415d;
//   position: absolute;

//   ${props => `
//     height: ${props.size}px;
//     width: ${props.size}px;
//     left: calc(50% - ${props.size / 2}px);
//   `}
// `;

// export default Box;
