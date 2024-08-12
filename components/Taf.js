import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Taf = () => { 
  const [visitors, setVisitors] = useState([ 
    { id: 1, name: 'G.Jyosthna', type: 'Visitor', purpose: 'Business', date: '2023-01-01', time: '10:00 AM' }, 
    { id: 2, name: 'Y.Sravanthi', type: 'Visitor', purpose: 'Tourism', date: '2023-01-02', time: '02:00 PM' }, 
    { id: 3, name: 'A.Sankar', type: 'Parent', purpose: 'Meeting', date: '2023-01-03', time: '03:30 PM' }, 
    { id: 4, name: 'A.Sankar', type: 'Parent', purpose: 'Hospital', date: '2023-01-04', time: '09:00 AM' }, 
    { id: 5, name: 'A.Swarupa', type: 'Parent', purpose: 'Discussion', date: '2023-01-05', time: '01:00 PM' }, 
  ]);;
  const [filteredVisitors, setFilteredVisitors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const filterVisitorsByType = (visitorType) => {
    const filtered = visitors.filter((visitor) => visitor.type === visitorType);
    setFilteredVisitors(filtered);
  };

  const clearFilters = () => {
    setFilteredVisitors([]);
    setSelectedCategory('');
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    if (category) {
      filterVisitorsByType(category);
    } else {
      clearFilters();
    }
  };

  // Array of colors for each card
  const cardColors = ['#FFC0CB', '#87CEEB', '#98FB98', '#FFD700', '#FFA07A'];

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
        <Select
          value={selectedCategory}
          onChange={handleCategoryChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Category' }}
          style={{ fontSize: '19px', width: '200px', height: '60px', marginRight: '50px' }}
        >
          <MenuItem value="" disabled>
            Select Category
          </MenuItem>
          <MenuItem value="Visitor">Visitor</MenuItem>
          <MenuItem value="Parent">Parent</MenuItem>
        </Select>
        <Button variant="contained" onClick={clearFilters} style={{ fontSize: '19px', width: '200px', height: '60px' }}>
          Clear Filters
        </Button>
      </div>
      <div style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
        {(filteredVisitors.length > 0 ? filteredVisitors : visitors).map((visitor, index) => (
          <Card
            key={visitor.id}
            style={{
              margin: '20px',
              width: '300px',
              height: '250px',
              backgroundColor: cardColors[index % cardColors.length],
              border: '2px solid black',
            }}
          >
            <CardContent>
              <Typography variant="h5" style={{ fontSize: '35px', marginBottom: '10px' }}>{visitor.name}</Typography>
              <Typography variant="body2" style={{ fontSize: '25px' }}>Type: {visitor.type}</Typography>
              <Typography variant="body2" style={{ fontSize: '25px' }}>Purpose: {visitor.purpose}</Typography>
              <Typography variant="body2" style={{ fontSize: '25px' }}>Date: {visitor.date}</Typography>
              <Typography variant="body2" style={{ fontSize: '25px' }}>Time: {visitor.time}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Taf;