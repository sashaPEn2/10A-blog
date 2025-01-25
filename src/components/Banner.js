import React from 'react';

const Banner = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'linear-gradient(900deg,rgb(201, 0, 0),rgb(247, 7, 7),rgb(30, 182, 10))',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '10px',
      zIndex: 1000,
      fontSize: '16px',
      textAlign: 'center',
      cursor: 'pointers'
    }}>
Читаете блог? Не забудьте про выборы! Ваш голос важнее!
    </div>
  );
};

export default Banner;
