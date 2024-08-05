import React from 'react';
import QuoteForm from '../components/addnewquote';
import { Container, Typography } from '@mui/material';
import axios from 'axios';
import Menu from "./menu";

const NewQuote = () => {
  const handleQuoteSubmit = async (quote) => {
    const formdata = ({
      quote: quote,
      id: localStorage.getItem('id'),
      name: localStorage.getItem('name')
    });
    try {
      const res = await axios.post('http://localhost:4000/Quote/add', formdata);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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
