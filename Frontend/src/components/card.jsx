import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShareButton from './share';

export default function MyCard({ title, description, id }) {
    return (
      <Card sx={{ 
        maxWidth: 345, 
        margin: 'auto', 
        borderRadius: '15px', 
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', 
        transition: '0.3s', 
        '&:hover': { boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)' } 
      }} id={id}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <ShareButton quote={title} id={id}/>
          <Button size="small" variant="contained">Save Quote</Button>
        </CardActions>
      </Card>
    );
  }