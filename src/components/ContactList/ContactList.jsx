import { useSelector } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handlefilteredContacts = () => {
    if (!contacts) {
      return;
    } else
      return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      });
  };
  return (
    <ul>
      {contacts &&
        handlefilteredContacts().map(({ name, number, id }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
    </ul>
  );
};
