import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/Toastcontext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Menu from "../components/menu";
import Copyright from '../components/copyright';
const baseUrl = import.meta.env.VITE_PROD_BASE_URL;

const defaultTheme = createTheme();

export default function SignIn() {
  const addToast = useToast()
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formdata = ({
      email: data.get('email'),
      password: data.get('password'),
    });
    try {
      const res = await axios.post(`${baseUrl}/signup/signin`, formdata);
      localStorage.setItem('id' , res.data.id);
      localStorage.setItem('name' , res.data.firstname +" "+res.data.lastName);
      addToast("Logged In" , 'success');
      navigate("/");
    } catch (error) {
      addToast(error.response.data.message , 'error');
      console.error('Error submitting form:', error);      
    }
  };

  return (
    <>
    <Menu/>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <Typography variant="h4">Q</Typography>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in to Quote Junction
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </>
  );
}