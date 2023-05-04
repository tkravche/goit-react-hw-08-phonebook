import React from 'react';
import { NavLink } from 'react-router-dom';

import { Link, Typography } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import { Stack } from '@mui/material';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Navigation = () => (
  <Stack
    direction="row"
    justifyContent="flex-start"
    alignItems="center"
    spacing={2}
  >
    <>
      <Link
        component={NavLink}
        to="/"
        sx={{
          color: '#e0f2f1',
          '&:hover': { color: '#00695c' },
          '&.active': { color: '#004d40' },
        }}
      >
        <HomeIcon sx={{ fontSize: 45 }} />
      </Link>
      <Link
        component={NavLink}
        to="/contacts"
        sx={{
          color: '#e0f2f1',
          '&:hover': { color: '#00695c' },
          '&.active': { color: '#004d40' },
        }}
      >
        <Typography variant="h5">Contacts</Typography>
      </Link>
    </>
  </Stack>
);

export default Navigation;
