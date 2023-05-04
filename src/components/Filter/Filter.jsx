import { TextField } from '@mui/material';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Find contacts by name</h1>
      <TextField
        label="search"
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
