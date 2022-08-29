import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ errors, setErrors ] = useState('');
    const navigate = useNavigate();

    const auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email,
                password,
            });
            navigate('/dashboard');
        } catch (err) {
            setErrors(err.response.data.message);
        }
    }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form className="box" onSubmit={auth}>
                                <div className="has-text-centered">{errors}</div>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input className="input"
                                               type="email"
                                               name="email"
                                               id="email"
                                               value={email}
                                               onChange={(e) => setEmail(e.target.value)}
                                               placeholder="Email" />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input className="input"
                                               type="password"
                                               name="password"
                                               id="password"
                                               value={password}
                                               onChange={(e) => setPassword(e.target.value)}
                                               placeholder="Password" />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <div className="control">
                                        <button className="button is-primary is-fullwidth">Login</button>
                                    </div>
                                </div>
                                <div className="has-text-centered">
                                    Doesn't have an account? <Link to={'/register'}>Register</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
