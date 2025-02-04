import React from 'react';

const Title = ({ title, children }) => {
  return (
    <div className="">
      <h1 className="text-5xl font-bold mb-4 text-center">{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default Title;