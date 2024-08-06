import { Grid, Skeleton, Card, CardContent, Container, Box , Button , CardActions } from '@mui/material';
export default function Skeletongrid({index}) {
  const indices = Array.from({ length: 9 }, (_, index) => index);
    return(
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
          {indices.map((index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              maxWidth: 345,
              margin: 'auto',
              borderRadius: '15px',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
              transition: '0.3s',
              '&:hover': { boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)' }
            }}
          >
            <CardContent>
              <Skeleton />
              <Skeleton width="70%" height="100%" />
              <CardActions style={{ paddingTop: '20px', paddingRight: '10px' }}>
                <Button size="small" variant="contained">
                  <Skeleton width="100%" />
                </Button>
                <Button size="small" variant="contained">
                  <Skeleton width="100%" />
                </Button>
                </CardActions>
            </CardContent>
          </Card>
        </Grid>
      ))}
            </Grid>
            </Container>
            </Box>
    )
}