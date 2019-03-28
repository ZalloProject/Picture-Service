/* eslint-disable import/extensions */
import React from 'react';
import listParser from '../utils/dataParser.jsx';

// eslint-disable-next-line react/prop-types
const Pictures = ({ data }) => {
  if (data.length > 0) {
    const photos = listParser(data);
    return (
      <div className="photoContainer">
        {photos}
      </div>
    );
  }
  return null;
};
export default Pictures;
