import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';



const Visitor = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const visitors = [
    {
      name: "A.SIVA",
      phonenumber: "123456789",
      relation: "Father",
      availabletime: "9:00-12:00",
      purpose: "Hospital",
      studentid: "2200031063",
      'color': 'pink'
    },
    {
      name: "A.SWARUPA",
      phonenumber: "987654321",
      relation: "Mother",
      availabletime: "9:00-12:00",
      purpose: "Visit",
      studentid: "2200031063",
      'color': 'aqua'
    },
    {
      name: "A.Namratha",
      phonenumber: "976548321",
      relation: "Father",
      availabletime: "9:00-12:00",
      purpose: "Check-Up",
      studentid: "2200031063",
      'color': 'green'
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {loading ? (
        <CircularProgress style={{ color: 'black' }} />
      ) : (
        visitors.map((visitor, index) => (
          <Card
            key={visitor.phonenumber}
            sx={{
              maxWidth: 345,
              background: visitor.color,
              border: '2px solid #336699 ${visitor.color}',
              margin: '20px',
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ color: 'black' }}>
                {visitor.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                <h3 style={{ color: 'black', fontFamily: 'Times New Roman, serif' }}>Phonenumber: {visitor.phonenumber}</h3>
                <h3 style={{ color: 'black', fontFamily: 'Times New Roman, serif' }}>Relation: {visitor.relation}</h3>
                <h3 style={{ color: 'black', fontFamily: 'Times New Roman, serif' }}>Availabletime: {visitor.availabletime}</h3>
                <h3 style={{ color: 'black', fontFamily: 'Times New Roman, serif' }}>Purpose: {visitor.purpose}</h3>
                <h3 style={{ color: 'black', fontFamily: 'Times New Roman, serif' }}>Studentid: {visitor.studentid}</h3>
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default Visitor;
