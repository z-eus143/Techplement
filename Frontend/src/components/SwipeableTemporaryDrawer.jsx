import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import LogoutIcon from '@mui/icons-material/Logout';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';

export default function SwipeableTemporaryDrawer() {
  
    const navigate = useNavigate();
  
    const [state, setState] = React.useState({
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem>
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home"/>
            </ListItemButton>
          </ListItem>
  
          <ListItem>
            <ListItemButton onClick={() => navigate("/Quote")}>
              <ListItemIcon><ViewModuleIcon /></ListItemIcon>
              <ListItemText primary="View all quotes"/>
            </ListItemButton>
          </ListItem>
  
          {!(localStorage.getItem('id')) ? <ListItem>
            <ListItemButton onClick={() => navigate("/SignIn")}>
              <ListItemIcon><LoginIcon /></ListItemIcon>
              <ListItemText primary="SignIn"/>
            </ListItemButton>
          </ListItem>
          : <>

          <ListItem>
            <ListItemButton onClick={() => navigate("/Newquote")}>
              <ListItemIcon><AddToPhotosIcon /></ListItemIcon>
              <ListItemText primary="Add New Quote"/>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton onClick={() => localStorage.removeItem('id')}>
              <ListItemIcon><LogoutIcon /></ListItemIcon>
              <ListItemText primary="SignOut"/>
            </ListItemButton>
          </ListItem>
          </>}
  
        </List>
      </Box>
    );
  
    return (
      <div>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>   
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    );
  }