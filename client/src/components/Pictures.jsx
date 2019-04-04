/* eslint-disable import/extensions */
import React from 'react';
import listParser from '../utils/dataParser.jsx';
import style from '../style.css';

// eslint-disable-next-line react/prop-types
const Pictures = ({ data, tracker }) => {
  if (data.length > 0) {
    const photos = listParser(data);
    if (tracker === 0) {
      return (
        <div className={style.photoContainer}>
          {photos.slice(0, 5)}
        </div>
      );
    }
    return (
      <div className={style.photoContainer}>
        {photos}
      </div>
    );
  }
  return null;
};
export default Pictures;
