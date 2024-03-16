import { ReactComponent as Icon } from '../../icons/trash.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../store/selectors';
import { deleteContact } from '../../store/contactsSlice';
import s from './ContactList.module.css';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilter);

  const getFilterContacts = () => {
    const filterNormalize = filtered.toLowerCase();

    if (!filterNormalize) {
      return contacts;
    }
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalize));
  };

  const filter = getFilterContacts();

  return (
    <>
      {contacts.length > 0 && (
        <ul className={s.list}>
          {filter.map(({ id, name, number }) =>
            <li className={s.item} key={id}>
              <p>
                {name}:
              </p>
              <p>
                {number}
              </p>
              <button className={s.button} onClick={() => dispatch(deleteContact(id))}>
                <Icon className={s.icon} />
              </button>
            </li>,
          )}
        </ul>
      )}
    </>
  );
};

export default ContactsList;
