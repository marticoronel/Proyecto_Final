import React from 'react';

const Button = ({ onClick, style, children, className }) => {
  return (
    <button onClick={onClick} style={style} className={className}>
      {children}
    </button>
  );
};

export default Button;
