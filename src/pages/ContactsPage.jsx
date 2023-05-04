import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Typography from '@mui/material/Typography';

import { fetchContactsThunk } from '../redux/contacts/operations';
import { selectError, selectLoading } from 'redux/contacts/selectors';
import { Container } from '@mui/material';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <main>
      <Container sx={{ textAlign: 'center', mt: 5 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: '600',
            textAlign: 'center',
            mt: 3,
            color: '#004d40',
          }}
        >
          Phonebook
        </Typography>
        {loading && !error && <b>Request in progress...</b>}
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </main>
  );
};
