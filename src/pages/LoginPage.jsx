import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

import Stack from '@mui/material/Stack';

import {
  Button,
  Typography,
  FormLabel,
  TextField,
  InputAdornment,
} from '@mui/material';
import Box from '@mui/material/Box';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';

export function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Box
        sx={{
          width: '30%',
          border: '4px ridge #009688',
          borderRadius: 4,
          mt: 10,
          ml: 65,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: '600',
            textAlign: 'center',
            mt: 3,
            color: '#004d40',
          }}
        >
          Login Page
        </Typography>

        <form onSubmit={handleSubmit} autoComplete="off">
          <Stack
            spacing={2}
            direction="column"
            paddingTop={4}
            paddingBottom={4}
            alignItems="center"
          >
            <FormLabel>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
                label="E-mail"
                size="large"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </FormLabel>

            <FormLabel>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                }}
                label="password"
                size="large"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </FormLabel>
            <Button
              size="large"
              variant="contained"
              type="submit"
              sx={{
                color: '#ffffff',
                backgroundColor: '#00695c',
              }}
            >
              Sign in
            </Button>
          </Stack>
        </form>
      </Box>
    </div>
  );
}
