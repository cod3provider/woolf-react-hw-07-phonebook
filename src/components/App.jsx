import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Container from './shared/Container/Container';

const App = () => {
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
      <Filter />
      <ContactsList />
    </Container>
  );
};

export default App;
