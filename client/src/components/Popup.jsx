import React from 'react';

const Popup = (props) => {
  const {
    check, curr, photos, change, close 
  } = props;
  if (check) {
    console.log(photos, curr);
    const styling = {
      // backgroundColor: 'grey',
      height: '90.70%',
      width: '100%',
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
    };
    const imageStyle = {
      height: '100%',
      width: '545px',
      margin: 'auto',
    };
    return (
      <div style={styling}>
        <button id="prev" type="submit" onClick={change}>Prev</button>
        <img style={imageStyle} src={photos[curr].url} alt="house" />
        <button type="submit" onClick={close}>X</button>
        <button id="next" type="submit" onClick={change}>Next</button>
      </div>
    );
  }
  return null;
};

export default Popup;
