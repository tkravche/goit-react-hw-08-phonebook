import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          fontWeight: '600',
          textAlign: 'center',
          mt: 3,
          mb: 3,
          color: '#004d40',
        }}
      >
        Find contacts by name
      </Typography>
      <TextField
        label="find"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => {
          dispatch(setFilter(e.target.value));
        }}
      />
    </>
  );
};
