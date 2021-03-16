import React, { useState } from 'react';

import './App.css';


// Import component of toastify.  The component ToastContainer show when execute a function 
import { ToastContainer } from 'react-toastify';
// Import styles of toastify
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Links from './components/Links';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import LinksInvited from './components/LinksInvited'

function App() {

    const adminUser = {
        email: 'admin@gmail.com',
        password: 'admin123'
    }


    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    const [guest, setGuest] = useState({ name: "", email: "" });


    const Login = details => {
        console.log(details);

        if (details.email === adminUser.email && details.password === adminUser.password) {
            console.log('estoy adentro')
            setUser({ name: details.name, email: details.email })
        } else {
            setError('Login or Password are incorrect!!!!');
        }
        
    }

    const Logout = () => {
        setUser({ name: "", email: "" });
    }


    return (

        <div className="container bg-secondary p-5">
            <div className="row d-flex flex-column align-items-center">


                <Header />

                {
                    (user.email !== "") ? (
                        <div >
                            <h2>Hola {user.name}</h2>
                            <button onClick={Logout}>Logout</button>
                            {/* <LinksInvited /> */}
                            <Links />
                            <Footer />
                        </div>
                    ) : (
                        <div>
                            <LoginForm Login={Login} error={error} />
                        </div>
                    )
                }

                {/* <Links />
                    <Footer /> */}


            </div>

            <ToastContainer />

        </div>
    );
}

export default App;
