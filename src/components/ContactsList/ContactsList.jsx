import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../store/selectors';
import { deleteContact, fetchContacts } from '../../store/operations';
import { ReactComponent as Icon } from '../../icons/trash.svg';
import s from './ContactsList.module.css';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filtered = useSelector(selectFilter);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilterContacts = () => {
    const filterNormalize = filtered.toLowerCase();

    if (!filterNormalize) {
      return contacts;
    }
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalize));
  };

  const handleClick = id => {
    dispatch(deleteContact(id))
  }

  const filter = getFilterContacts();

  return (
    <>
      {contacts.length > 0 && (
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) =>
            <li className={s.item} key={id}>
              <p>
                {name}:
              </p>
              <p>
                {number}
              </p>
              <button className={s.button} onClick={() => handleClick(id)}>
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
