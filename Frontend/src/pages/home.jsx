import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from "./menu";
const baseUrl = import.meta.env.VITE_PROD_BASE_URL;

export default function Home() {
    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
      axios.get(`${baseUrl}/Quote/`)
        .then(response => {
          setQuotes(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    return(
        <>
        <Menu/>
        <Box textAlign={'center'} padding={'40px'} marginTop={'30px'}>
        <Typography variant="h2" gutterBottom display={'block'}>
        Quote of the Day
        </Typography>
        <Typography variant="h1" gutterBottom>
        {quotes.quote}
        </Typography>
        <Typography variant="h5" display="block" gutterBottom textAlign={'end'} marginRight={"100px"}>
        ~ {quotes.writerName}
        </Typography>
        </Box>
        </>
    )
}