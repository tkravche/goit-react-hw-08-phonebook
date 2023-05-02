import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContactThunk } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled';

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
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeInput}
        />
      </StyledLabel>
      <StyledLabel>
        Number
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChangeInput}
        />
      </StyledLabel>
      <StyledButton>Add contact</StyledButton>
    </StyledForm>
  );
};
