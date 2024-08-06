import {useLocation} from 'react-router-dom'
import Menu from "./menu"
import Cardview from "../components/cardview";
import { Typography } from '@mui/material';
export default function Search() {
    const location = useLocation();
    const receivedData = location.state.data;
    return(
        <>
        <Menu/>
        {receivedData ? <Cardview cards={receivedData}/> : <Typography variant='h1'>Can't found any data</Typography>}
        </>
    )
}
