import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Menu from "../components/menu";
import Copyright from '../components/copyright';
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
        <Box
          textAlign="center"
          padding={{ xs: '20px', sm: '30px', md: '40px' }}
          marginTop={{ xs: '20px', sm: '25px', md: '30px' }}
        >
        <Typography
          variant="h2"
          gutterBottom
          display="block"
          sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}
        >
        Quote of the Day
        </Typography>
        <Typography
          variant="h1"
          gutterBottom
          sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' , opacity : '0.5'} , fontWeight : "600"}}
        >
        {quotes.quote || <Skeleton style={{width : "80%" , height : "8rem"}}/>}
        </Typography>
        <Typography
          variant="h5"
          display="block"
          gutterBottom
          textAlign="end"
          sx={{
            marginRight: { xs: '10px', sm: '20px', md: '100px' },
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
            }}
        >
        ~ Posted By {quotes.writerName || <Skeleton style={{ width : "10%" }}/>}
        </Typography>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
        </>
    )
}

