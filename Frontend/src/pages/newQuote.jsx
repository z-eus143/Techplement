import React from 'react';
import QuoteForm from '../components/addnewquote';
import { Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import Menu from "./menu";
const baseUrl = import.meta.env.VITE_PROD_BASE_URL;

const NewQuote = () => {
  const [visible,setvisible] = React.useState(true); 
  const handleQuoteSubmit = async (quote) => {
    const formdata = ({
      quote: quote,
      id: localStorage.getItem('id'),
      name: localStorage.getItem('name')
    });
    try {
      const res = await axios.post(`${baseUrl}/Quote/add`, formdata);
      setvisible(false)
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
    <Menu/>
    <Container style={{textAlign : 'center'}}>
      {visible ? <>
      <Typography variant="h4" gutterBottom marginTop={'40px'} textAlign={'center'}>
        Add a New Quote
      </Typography>
      <QuoteForm onSubmit={handleQuoteSubmit} />
      </> : <>
      <Typography variant="h4" gutterBottom marginTop={'40px'} textAlign={'center'}>
        Want to Add More Quote
      </Typography>
      <Button onClick={() => {setvisible(true)}} type="submit" variant="contained" color="primary">Add</Button>
      </>}
    </Container>
    </>
  );
};

export default NewQuote;
