import React from 'react';

const Footer = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

  return (
    <div style={{
      position: 'fixed',
      bottom: '0',
      left: '0',
      width: '100%',
      marginTop: 'auto',
      padding: '2px',
      textAlign: 'center',
      backgroundColor: 'white', // Optional background color
    }}>
      <h3 style={{ color: 'red' }}>@Copyrights reserved for KLEF {formattedDate}</h3>
      
    </div>
  );
};

export default Footer;
