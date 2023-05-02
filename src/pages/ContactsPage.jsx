import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { StyledWrapper } from '../components/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContactsThunk } from '../redux/contacts/operations';
import { selectError, selectLoading } from 'redux/contacts/selectors';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <main>
      <StyledWrapper>
        <h1>Phonebook</h1>
        {loading && !error && <b>Request in progress...</b>}
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </StyledWrapper>
    </main>
  );
};
