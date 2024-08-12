import React, { useState } from 'react'; // Import useState
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const counselors = [
  {
    empid: 1,
    empname: 'Bhavya',     
    designation: 'Counselor',
    phone: '*',
    email: 'bhavya@gmail.com',
    noofcounsellingstudents: 10,
  },
  {
    empid: 2,
    empname: 'Jashini Shyni',
    designation: 'Counselor',
    phone: '*',
    email: 'jashini@gmail.com',
    noofcounsellingstudents: 8,
  },
  {
    empid: 3,
    empname: 'Sravanthi Yenumula',
    designation: 'Senior Counselor',
    phone: '*',
    email: 'sravanthi@gmail.com',
    noofcounsellingstudents: 12,
  },
  {
    empid: 4,
    empname: 'Ruchitha',
 
    designation: 'Career Counselor',
    phone: '*',
    email: 'ruchitha@gmail.com',
    noofcounsellingstudents: 15,
  },
  {
    empid: 5,
    empname: 'Harshitha',
    designation: 'Student Support Counselor',
    phone: '*',
    email: 'harshitha@gmail.com',
    noofcounsellingstudents: 1,
  },
];

const Faculty = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (empid) => {
    setSelectedCard(empid);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap',marginTop: '200px'  }}>
      {counselors.map((counselor) => (
        <Card
          key={counselor.empid}
          sx={{
            maxWidth: 345,
            border: '2px solid #336699',
            margin: '20px',
            background:
              counselor.noofcounsellingstudents < 10
                ? 'orange' // Blue background for less than 10 students
                : counselor.noofcounsellingstudents < 15
                ? 'pink' // Pink background for less than 15 students
                : 'green', // Green background for 15 or more students
            ':hover': {
              background: 'lavender', // Yellow background on hover
             
            },
            zIndex: selectedCard === counselor.empid ? 1 : 'auto', // Elevate the selected card
          }}
          onClick={() => handleCardClick(counselor.empid)}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ color: 'black' }}>
              {counselor.empname}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ color: 'black' }}>
            <h3 style={{ fontFamily: 'Times New Roman, serif' }}>Faculty{counselor.empid}</h3>
              <h3 style={{ fontFamily: 'Times New Roman, serif' }}>Emp ID: {counselor.empid}</h3>
              <h3 style={{ fontFamily: 'Times New Roman, serif' }}>Designation: {counselor.designation}</h3>
              <h3 style={{ fontFamily: 'Times New Roman, serif' }}>Email: {counselor.email}</h3>
              <h3>Phone no: {counselor.phone}</h3>
              <h3>No. of Counseling Students: {counselor.noofcounsellingstudents}</h3>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Faculty;