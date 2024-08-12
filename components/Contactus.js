import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const contactus = [
  {
    'user': 'KL University',
    'phoneno': '912223456789',
    'email': 'klu@gmail.com',
    'color': 'lightcoral'
  },
  {
    'user': 'ContactUs',
    'phoneno': '98765422333',
    'email': 'contactus@gmail.com',
    'color': 'lightseagreen'
  },
  {
    'user': 'Referance',
    'phoneno': '9876543323',
    'email': 'referance@gmail.com',
    'color': 'orange'
  },
];

const Contactus = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap',marginTop: '100px'  }}>
      {contactus.map((contact, index) => (
        <Card
          key={index}
          sx={{ maxWidth: 345, background: contact.color, border: `2px solid ${contact.color}`, margin: '20px' }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ color: 'black' }}>
              {contact.user}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
              <h3 style={{ color: 'black',fontFamily: 'Times New Roman, serif' }}>Phoneno: {contact.phoneno}</h3>
              <h3 style={{ color: 'black', fontFamily: 'Times New Roman, serif' }}>Email: {contact.email}</h3>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Contactus;
