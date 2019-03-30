/* eslint-disable import/extensions */
import React from 'react';
import listParser from '../utils/dataParser.jsx';
import style from '../style.css';

// eslint-disable-next-line react/prop-types
const Pictures = ({ data }) => {
  if (data.length > 0) {
    const photos = listParser(data);
    return (
      <div className={style.photoContainer}>
        {photos}
      </div>
    );
  }
  return null;
};
export default Pictures;
