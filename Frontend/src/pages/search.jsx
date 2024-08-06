import {useLocation} from 'react-router-dom'
import Menu from "../components/menu";
import Cardview from "../components/cardview";
import { Typography } from '@mui/material';
import Copyright from '../components/copyright';
export default function Search() {
    const location = useLocation();
    const receivedData = location.state.data;
    return(
        <>
        <Menu/>
        {receivedData ? <Cardview cards={receivedData}/> : <Typography variant='h1'>Can't found any data</Typography>}
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </>
    )
}
