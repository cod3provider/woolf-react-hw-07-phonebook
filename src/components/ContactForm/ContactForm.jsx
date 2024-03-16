import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { getContacts } from '../../store/selectors';
import { createContact } from '../../store/contactsSlice';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = formData;
    const isExist = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

    isExist
      ?
      toast.warn(`${name} is already in contacts.`)
      :
      dispatch(createContact({
        id: nanoid(),
        name,
        number,
      }));

    reset();
  };

  const reset = () => {
    setFormData({ name: '', number: '' });
  };

  const { name, number } = formData;

  return (
    <div className={s.wrap}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label htmlFor="contactName" className={s.label}>Name</label>
        <input
          className={s.input}
          onChange={handleChange}
          id="contactName"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor="contactNumber" className={s.label}>Number</label>
        <input
          className={s.input}
          onChange={handleChange}
          id="contactNumber"
          type="tel"
          name="number"
          value={number}
          pattern="\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={s.button} type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
