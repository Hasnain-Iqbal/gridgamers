import React from 'react';

const ImageWithCaption = ({ src, caption, size }) => {
  return (
    <div className="w-auto ">
      <img src={src} alt={caption} className={` w-[${size * 20}%]`} />
      <p className="mt-2">{caption}</p>
    </div>
  );
};

export default ImageWithCaption;
