import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import app from './app.jpg'; // Import your app.jpg image
import AppointmentDetails from './AppointmentDetails';

const Appointment = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
    // Set appointment details after successful submission
    setAppointmentDetails({
      parentName: event.target.elements.parentName.value,
      gender: event.target.elements.gender.value,
      age: event.target.elements.age.value,
      mobile: event.target.elements.mobile.value,
      email: event.target.elements.email.value, // Added email field
      studentId: event.target.elements.studentId.value,
      studentName: event.target.elements.studentName.value,
      department: event.target.elements.department.value,
      purpose: event.target.elements.purpose.value,
      date: event.target.elements.date.value,
      time: event.target.elements.time.value,
    });
  };

  const handleInputChange = () => {
    // Check if all required fields are filled
    const requiredFields = document.querySelectorAll('[required]');
    const isValid = Array.from(requiredFields).every((field) => field.value.trim() !== '');
    setIsFormValid(isValid);
  };

  useEffect(() => {
    // Initially, the form is not valid
    setIsFormValid(false);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {appointmentDetails ? (
        <AppointmentDetails appointmentDetails={appointmentDetails} />
      ) : (
        <Paper elevation={10} sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90%', maxWidth: '400px', marginTop: '40px' }}>
          <img src={app} alt="Lock" style={{ width: '50px', height: '50px', backgroundColor: '#1bbd7e', borderRadius: '50%' }} />
          
          <Typography variant="h6" gutterBottom style={{ textAlign: 'center', marginTop: '10px' }}>
            Appointment Form
          </Typography>
          <form onSubmit={handleSubmit} onChange={handleInputChange}>
            {/* Parent Information */}
            <TextField label="Parent's Name" fullWidth margin="normal" required name="parentName" />
            
            {/* Gender Dropdown */}
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Gender</InputLabel>
              <Select label="Gender" name="gender">
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
            
            <TextField label="Age" type="number" fullWidth margin="normal" required name="age" />
            <TextField label="Mobile" type="tel" fullWidth margin="normal" required name="mobile" />
            
            {/* Email Input */}
            <TextField label="Email" type="email" fullWidth margin="normal" required name="email" />

            {/* Student Information */}
            <TextField label="Student ID" fullWidth margin="normal" required name="studentId" />
            <TextField label="Student Name" fullWidth margin="normal" required name="studentName" />
            
            {/* Department Dropdown */}
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Department</InputLabel>
              <Select label="Department" name="department">
                <MenuItem value="CSE-R">CSE-R</MenuItem>
                <MenuItem value="CS&IT">CS&IT</MenuItem>
                <MenuItem value="ECE">ECE</MenuItem>
                <MenuItem value="EEE">EEE</MenuItem>
                <MenuItem value="CIVIL">CIVIL</MenuItem>
                <MenuItem value="MECH">MECH</MenuItem>
                <MenuItem value="IOT">IOT</MenuItem>
                <MenuItem value="AI&DS">AI&DS</MenuItem>
                <MenuItem value="CSE-H">CSE-H</MenuItem>
              </Select>
            </FormControl>
            
            {/* Visit Details */}
            <TextField label="Purpose of Visit" fullWidth margin="normal" required name="purpose" />
            <TextField type="date" fullWidth margin="normal" required name="date" />
            <TextField type="time" fullWidth margin="normal" required name="time" />

            <input
              type="file"
              accept=".pdf"
              style={{ marginTop: '10px', padding: '6px', backgroundColor: 'white', border: 'none', borderRadius: '4px' }}
            />
            <Box mt={2}>
              <Button variant="contained" color="primary" type="submit" disabled={!isFormValid}>
                Submit
              </Button>
            </Box>
          </form>
        </Paper>
      )}
    </div>
  );
};

export default Appointment;
