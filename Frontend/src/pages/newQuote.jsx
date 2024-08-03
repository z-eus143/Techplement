import React from 'react';
import QuoteForm from '../components/addnewquote';
import { Container, Typography } from '@mui/material';
import Menu from "./menu";

const NewQuote = () => {
  const handleQuoteSubmit = (quote) => {
    console.log('New Quote Submitted:', quote);
  };

  return (
    <>
    <Menu/>
    <Container>
      <Typography variant="h4" gutterBottom marginTop={'40px'} textAlign={'center'}>
        Add a New Quote
      </Typography>
      <QuoteForm onSubmit={handleQuoteSubmit} />
    </Container>
    </>
  );
};

export default NewQuote;
