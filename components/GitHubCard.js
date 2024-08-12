
import React from 'react';
import { Avatar, Card, CardContent, Typography } from '@mui/material';

const GitHubCard = ({ name, id, email, avatarUrl, color }) => (
  <Card style={{ backgroundColor: color, border: '1px solid #ddd', borderRadius: '8px', padding: '16px', margin: '8px', width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Avatar alt={name} src={avatarUrl} style={{ width: '100px', height: '100px', margin: '0 auto', marginBottom: '16px' }} />
    <CardContent>
      <Typography variant="h6" component="div" style={{ textAlign: 'center' }}>
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center' }}>
        Email: {email || 'N/A'}
      </Typography>
    </CardContent>
  </Card>
);

export default  GitHubCard;