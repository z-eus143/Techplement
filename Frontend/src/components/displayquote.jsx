import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {useLocation} from 'react-router-dom'
import Menu from '../pages/menu';
export default function Display() {
  const location = useLocation();
  const receivedData = location.state;
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
        Quote
        </Typography>
        <Typography
          variant="h1"
          gutterBottom
          sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' , opacity : '0.5'} , fontWeight : "600"}}
        >
        {receivedData.description || <Skeleton style={{width : "80%" , height : "8rem"}}/>}
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
        ~ Posted By {receivedData.title || <Skeleton style={{ width : "10%" }}/>}
        </Typography>
      </Box>
      <Link href="/Quote" variant="body2" underline='none'>
          <Typography variant='h5'  fontWeight="600">{"<< Back"}</Typography>
        </Link>
        </>
    )
}