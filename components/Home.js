import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Home = ({ loginData }) => {

  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
      <b><p style={{ fontSize: '35px', color: 'darkred', fontFamily: 'Bold' }}>  WELCOME</p></b>
      <h3 style={{ fontSize: '25px', color: 'purple', fontFamily: 'Times New Roman' }}>User: {loginData.email}</h3>
      <Footer />
    </div>
  );
};

export default Home;
