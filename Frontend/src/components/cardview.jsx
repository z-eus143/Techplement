import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MyCard from "./card";
import PropTypes from 'prop-types';

export default function Cardview({ cards }) {
    return(
      <>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '100vh', 
          backgroundColor: '#f5f5f5',
          padding: '20px'
        }}
      >
        <Container>
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <MyCard
                  id={card._id}
                  title={card.writerName}
                  description={card.quote}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      </>
    )
  }

  Cardview.propTypes = {
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  };