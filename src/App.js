import './App.css';

import Links from './components/Links';

// Import component of toastify.  The component ToastContainer show when execute a function 
import { ToastContainer } from 'react-toastify';
// Import styles of toastify
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {



  return (
    <div className="container bg-secondary p-5">
      <div className="row d-flex flex-column align-items-center">
        <Header />
        <Links />
        <Footer />
      </div>

      <ToastContainer />

    </div>
  );
}

export default App;
