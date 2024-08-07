import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/Toastcontext';
const baseUrl = import.meta.env.VITE_PROD_BASE_URL;

export default function SearchAppBar() {

    const navigate = useNavigate();
    const addToast = useToast();

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));

      const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
          const userInput = event.target.value;
          const namePattern = /^[\w]+ [\w]+$/;         
          if (namePattern.test(userInput)) {
              try {
                  const response = await axios.get(`${baseUrl}/Quote/show`);
                  const quotes = response.data;
                  const lowerCaseWriterName = userInput.toLowerCase();
                  const data = quotes.filter(quote => 
                      quote.writerName.toLowerCase().includes(lowerCaseWriterName)
                  );
                  navigate("/search", { state: { data } });
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
          } else {
              addToast('Invalid input format. Please enter a name in "Firstname Lastname" format. to search Quote' , 'error');
          }
      }
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <SwipeableTemporaryDrawer/>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            Quote Junction
          </Typography>
          <Search onKeyDown={handleKeyPress}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              id='text'
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

