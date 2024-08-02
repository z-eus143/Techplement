import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

const ShareButton = ({ quote }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShare = (platform) => {
    const url = 'https://ty-project.vercel.app/';
    const text = quote;

    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
    } else if (platform === 'email') {
      window.location.href = `mailto:?subject=${encodeURIComponent('Example Page')}&body=${encodeURIComponent(text + ' ' + url)}`;
    } else if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`);
    }

    handleClose();
  };

  return (
    <>
      <Button
        aria-controls="share-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<ShareIcon />}
      >
        Share
      </Button>
      <Menu
        id="share-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleShare('facebook')}>Facebook</MenuItem>
        <MenuItem onClick={() => handleShare('twitter')}>Twitter</MenuItem>
        <MenuItem onClick={() => handleShare('email')}>Email</MenuItem>
        <MenuItem onClick={() => handleShare('whatsapp')}>WhatsApp</MenuItem>
      </Menu>
    </>
  );
};

export default ShareButton;
