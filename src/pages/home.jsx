import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from "./menu";

export default function Home() {
    return(
        <>
        <Menu/>
        <Box textAlign={'center'} padding={'40px'} marginTop={'30px'}>
        <Typography variant="h2" gutterBottom display={'block'}>
        Quote of the Day
        </Typography>
        <Typography variant="h1" gutterBottom>
        Tanmay is great for all the time, 
        Tanmay is great for all the time.
        </Typography>
        <Typography variant="h5" display="block" gutterBottom textAlign={'end'} marginRight={"100px"}>
        ~ Tanmay
        </Typography>
        </Box>
        </>
    )
}