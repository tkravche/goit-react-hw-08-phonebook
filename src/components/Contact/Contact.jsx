import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

import { removeContactThunk } from 'redux/contacts/operations';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        sx={{ listStyle: 'none', width: '25vw' }}
      >
        <Typography
          component="li"
          sx={{
            color: '#00796b',
            fontSize: '22px',
            fontWeight: '500',
            mb: '20px',
          }}
        >
          {name}:{' '}
          <Typography
            component="span"
            sx={{ color: '#042f2a', fontSize: '17px', ml: '15px' }}
          >
            {number}
          </Typography>
        </Typography>

        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => {
            dispatch(removeContactThunk(id));
          }}
        >
          Delete
        </Button>
      </Stack>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
