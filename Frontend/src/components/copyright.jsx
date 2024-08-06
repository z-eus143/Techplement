import { Box , Typography , Grid , Link } from '@mui/material';

import { styled } from '@mui/material/styles';


const SocialIcon = styled('a')(({ theme }) => ({
    fontSize: '32px',
    color: theme.palette.text.primary,
    margin: theme.spacing(1),
    transition: 'color 0.3s ease, transform 0.3s ease',
    '&:hover': {
      color: theme.palette.primary.main,
      transform: 'scale(1.1)',
    },
  }));

export default function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          Tanmay
        </Link>
        <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <SocialIcon href="https://github.com/z-eus143/Techplement.git" target="_blank" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/in/tanmay-maji-19aa90279" target="_blank" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/yourprofile" target="_blank" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </SocialIcon>
                <SocialIcon href="https://twitter.com/yourprofile" target="_blank" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </SocialIcon>
              </Box>
            </Grid>
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }