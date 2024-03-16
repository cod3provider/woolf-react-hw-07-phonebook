import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Container from './shared/Container/Container';
import { useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from '../store/selectors';

const App = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
      <h2>Contacts</h2>
      {contacts.length > 0 ?
        <Filter /> : <p>You have no contacts</p>
      }
      {isLoading && !error && <p>...Loading</p>}
      <ContactsList />
    </Container>
  );
};

export default App;
