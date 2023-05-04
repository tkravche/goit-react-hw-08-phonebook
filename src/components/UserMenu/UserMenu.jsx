import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';

import { Button, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUsermail);
  const name = useSelector(authSelectors.getUsername);

  return (
    <Stack direction="row" justifyContent="end" alignItems="end" spacing={3}>
      <Avatar>{name.toUpperCase().slice(0, 1)}</Avatar>
      <Typography
        variant="h5"
        sx={{
          color: '#004d40',
        }}
      >
        Welcome,&nbsp;
        <Typography variant="h5" color="secondary" component="span">
          {email}
        </Typography>
        &nbsp;!
      </Typography>
      <Button
        size="small"
        variant="contained"
        type="submit"
        sx={{
          mt: 2,
          textAlign: 'center',
          color: '#ffffff',
          backgroundColor: '#00695c',
        }}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </Stack>
  );
}
