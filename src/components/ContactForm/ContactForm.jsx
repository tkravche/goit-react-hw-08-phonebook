import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContactThunk } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import { Button, Stack, FormLabel, TextField, Box } from '@mui/material';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const mapState = {
    name: setName,
    number: setNumber,
  };
  const handleChangeInput = ({ target: { name, value } }) => {
    mapState[name](value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!contacts) {
      return;
    } else if (
      contacts.some(contact => {
        return contact.name.toLowerCase().includes(name.toLowerCase());
      })
    ) {
      alert(`${name} is already in contacts`);
      setName('');
      setNumber('');
      return;
    }
    const newContact = {
      name,
      number,
    };
    dispatch(addContactThunk(newContact));
    setName('');
    setNumber('');
  };

  return (
    <Box
      sx={{
        width: '40%',
        border: '5px groove #009688',
        borderRadius: 4,
        mt: 3,
        ml: 'auto',
        mr: 'auto',
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack
          spacing={3}
          direction="column"
          paddingTop={2}
          paddingBottom={2}
          alignItems="center"
        >
          <FormLabel
            sx={{
              display: 'flex',
              gap: 5,
              justifyContent: 'flex-start',
              alignItems: 'center',
              fontWeight: '500',
              color: '#004d40',
            }}
          >
            Name
            <TextField
              sx={{ pr: 1 }}
              size="large"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChangeInput}
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
            Number
            <TextField
              size="large"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleChangeInput}
            />
          </FormLabel>
          <Button size="medium" variant="contained" type="submit">
            Add contact
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
