import React, { useState } from "react";

import "./loginForm.css";

const LoginForm = ({ Login, error }) => {
    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    const submitHandler = (e) => {
        e.preventDefault();

        Login(details);
    };

    return (
        <form onSubmit={submitHandler} className="formulary bg-primary">
            <div className="formulary-inner p-3">
                <h2 className="text-warning">LOGIN</h2>

                {error !== "" ? <div className="error">{error}</div> : ""}

                <div className="rows">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) => setDetails({ ...details, name: e.target.value })}
                        value={details.name}
                    />
                </div>

                <div className="rows">
                    <label htmlFor="login">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => setDetails({ ...details, email: e.target.value })}
                        value={details.email}
                    />
                </div>

                <div className="rows">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) =>
                            setDetails({ ...details, password: e.target.value })
                        }
                        value={details.password}
                    />
                </div>

                <div className="button-login">
                    <input
                        type="submit"
                        value="L O G I N"
                        className="bg-warning text-primary"
                    />
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
