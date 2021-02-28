import './App.css';

import Links from './components/Links';

// Import component of toastify.  The component ToastContainer show when execute a function 
import { ToastContainer } from 'react-toastify';
// Import styles of toastify
import 'react-toastify/dist/ReactToastify.css';

function App() {



  return (
    <div className="container bg-secondary">
      <div className="row d-flex flex-column align-items-center">
        <Links />
      </div>

      <ToastContainer />

    </div>
  );
}

export default App;
