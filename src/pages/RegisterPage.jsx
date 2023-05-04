import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import authOperations from '../redux/auth/auth-operations';

import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import Stack from '@mui/material/Stack';

import { FormLabel } from '@mui/material';

export function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      sx={{
        width: '30%',
        border: '5px ridge #009688',
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
        Registration page
      </Typography>

      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack
          spacing={3}
          direction="column"
          paddingTop={4}
          paddingBottom={4}
          alignItems="center"
        >
          <FormLabel
            sx={{
              display: 'flex',
              gap: 3,
              justifyContent: 'flex-start',
              alignItems: 'center',
              fontWeight: '500',
              color: '#004d40',
            }}
          >
            Username
            <TextField
              sx={{ pr: 1 }}
              size="large"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </FormLabel>

          <FormLabel
            sx={{
              display: 'flex',
              gap: 6,
              justifyContent: 'flex-start',
              alignItems: 'center',
              fontWeight: '500',
              color: '#004d40',
            }}
          >
            E-mail
            <TextField
              size="large"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </FormLabel>

          <FormLabel
            sx={{
              display: 'flex',
              gap: 3,
              justifyContent: 'flex-start',
              alignItems: 'center',
              fontWeight: '500',
              color: '#004d40',
            }}
          >
            Password
            <TextField
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
            Register
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
