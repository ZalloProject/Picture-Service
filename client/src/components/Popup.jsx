/* eslint-disable react/prop-types */
import React from 'react';
import style from '../style.css';

const Popup = (props) => {
  const {
    check, curr, photos, change, close,
  } = props;
  if (check) {
    const prev = '<';
    const next = '>';
    return (
      <div className={style.popMainContainer}>
        <button className={style.prev} type="submit" onClick={change}>{prev}</button>
        <img className={style.popImageStyle} src={photos[curr].url} alt="house" />
        <button className={style.closeStyle} type="submit" onClick={close}>X</button>
        <button className={style.next} type="submit" onClick={change}>{next}</button>
      </div>
    );
  }
  return null;
};

export default Popup;
