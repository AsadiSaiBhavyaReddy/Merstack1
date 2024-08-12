import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import avatar from './avatar.jpg';
import avatar1 from './avatar1.jpg';
import avatar2 from './avatar2.jpg';

export default function Student() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '70px' }}>
    <Card sx={{ maxWidth: 345, background: 'lavender', border: '2px solid green', margin: '10px'}}>
      <CardMedia sx={{ height: 400 }} image={avatar} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"></Typography>
        <Typography variant="body2" color="text.secondary">
          <h3 style={{ color: 'orange', fontFamily: 'Times New Roman, serif' }}>Name: A.Sai Bhavya</h3>
          <h3 style={{ color: 'violet', fontFamily: 'Times New Roman, serif' }}>Age: 18</h3>
          <h3 style={{ color: 'blue', fontFamily: 'Times New Roman, serif' }}>Email: bhavya@gmail.com</h3>
          <h3>Phoneno: 9876543213</h3>
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>

      <Card sx={{ maxWidth: 345, background: 'lavender', border: '2px solid green', margin: '10px' }}>
        <CardMedia sx={{ height: 400 }} image={avatar1} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"></Typography>
          <Typography variant="body2" color="text.secondary">
            <h3 style={{ color: 'orange', fontFamily: 'Times New Roman, serif' }}>Name: N.Gayatri</h3>
            <h3 style={{ color: 'violet', fontFamily: 'Times New Roman, serif' }}>Age: 18</h3>
            <h3 style={{ color: 'blue', fontFamily: 'Times New Roman, serif' }}>Email: gayatri@gmail.com</h3>
            <h3>Phoneno: 945678912</h3>
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, background: 'lavender', border: '2px solid green', margin: '10px' }}>
        <CardMedia sx={{ height: 400 }} image={avatar2} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"></Typography>
          <Typography variant="body2" color="text.secondary">
            <h3 style={{ color: 'orange', fontFamily: 'Times New Roman, serif' }}>Name: Y.Sravanthi</h3>
            <h3 style={{ color: 'violet', fontFamily: 'Times New Roman, serif' }}>Age: 18</h3>
            <h3 style={{ color: 'blue', fontFamily: 'Times New Roman, serif' }}>Email: sravanthi@gmail.com</h3>
            <h3>Phoneno: 987654321</h3>
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
