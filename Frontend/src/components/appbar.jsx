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
import Autocomplete from '@mui/material/Autocomplete';

const baseUrl = import.meta.env.VITE_PROD_BASE_URL;

export default function SearchAppBar() {
    const navigate = useNavigate();
    const addToast = useToast();

    // Fetch options for Autocomplete
    const [options, setOptions] = React.useState([]);
    
    React.useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await axios.get(`${baseUrl}/Quote/show`);
                const quotes = response.data;
                const uniqueNames = [...new Set(quotes.map(quote => quote.writerName))];
                setOptions(uniqueNames.map(name => ({ label: name })));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchOptions();
    }, []);

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

    const handleSearch = async (event, value) => {
        if (value) {
            const lowerCaseWriterName = value.toLowerCase();
            try {
                const response = await axios.get(`${baseUrl}/Quote/show`);
                const quotes = response.data;
                const data = quotes.filter(quote => 
                    quote.writerName.toLowerCase().includes(lowerCaseWriterName)
                );
                navigate("/search", { state: { data } });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } else {
            addToast('Invalid input format. Please enter a valid name to search Quote.', 'error');
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <SwipeableTemporaryDrawer />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { sm: 'block' } }}
                    >
                        Quote Junction
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <Autocomplete
                            freeSolo
                            options={options.map(option => option.label)}
                            renderInput={(params) => (
                                <StyledInputBase
                                    {...params}
                                    placeholder="Search…"
                                    inputProps={{ ...params.inputProps, 'aria-label': 'search' }}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                            handleSearch(event, params.inputProps.value);
                                        }
                                    }}
                                />
                            )}
                            onChange={(event, value) => {
                                if (value) {
                                    handleSearch(event, value);
                                }
                            }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
