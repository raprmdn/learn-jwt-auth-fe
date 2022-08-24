import React from 'react';
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form className="box">
                                <div className="field mt-5">
                                    <label className="label">Name</label>
                                    <div className="control">
                                        <input className="input"
                                               type="text"
                                               name="name"
                                               id="name"
                                               placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input className="input"
                                               type="email"
                                               name="email"
                                               id="email"
                                               placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input className="input"
                                               type="password"
                                               name="password"
                                               id="password"
                                               placeholder="Password"/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Confirm Password</label>
                                    <div className="control">
                                        <input className="input"
                                               type="password"
                                               name="password_confirmation"
                                               id="password_confirmation"
                                               placeholder="Confirm Password"/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <div className="control">
                                        <button className="button is-primary is-fullwidth">Register</button>
                                    </div>
                                </div>
                                <div className="has-text-centered">
                                    Already have an account? <Link to={'/'}>Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
