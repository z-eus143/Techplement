import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const QuoteForm = ({ onSubmit }) => {
  const [quote, setQuote] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(quote);
    setQuote(''); 
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto' , marginTop: '40px'}}>
      <TextField
        label="New Quote"
        variant="outlined"
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default QuoteForm;