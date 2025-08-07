import React from 'react';
import './Avatar.css';

const Avatar = ({ image, alt, width, height }) => {
  return (
    <div className="avatar" style={{ width: width || '80px', height: height || '80px' }}>
      <img src={image} alt={alt} />
    </div>
  );
};

export default Avatar;