import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';

import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

export default function AuthNav() {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Link
        component={NavLink}
        to="/register"
        sx={{
          color: '#e0f2f1',
          '&:hover': { color: '#00695c' },
          '&.active': { color: '#004d40' },
        }}
      >
        <Typography variant="h5">Registration</Typography>
      </Link>
      <Link
        component={NavLink}
        to="/login"
        sx={{
          color: '#e0f2f1',
          '&:hover': { color: '#00695c' },
          '&.active': { color: '#004d40' },
        }}
      >
        <Typography variant="h5" sx={{ ml: 2 }}>
          Login
        </Typography>
      </Link>
    </Container>
  );
}
