import React from "react"
import { NavLink } from "react-router-dom"

import "styles/views/login"

import Input from "components/Input"
import Header from "components/Header"
import Footer from "components/Footer"
import AnimationCube from "components/AnimationCube"
import Form from "components/Forms/Form"

export interface LoginProps {
    
}

export interface LoginState {
    
}

export default
class Login
extends React.Component<LoginProps, LoginState> {

    names = {
        email: "EmailAdress",
        password: "Password",
    }

    render() {
        const { 
            email, 
            password
        } = this.names
        return <>
            <main className="v-login">
                <div className="container">
                    <div className="u-form-close">
                        <NavLink
                            to="/"
                            exact
                        >
                            <img src="/static/images/close.svg" alt="close"/>
                        </NavLink>
                    </div>
                    <div className="login-flex">
                        <div className="login-left">
                            <div className="u-title">Login</div>
                            <p className="u-sub-title">
                                We believe in fair partnership.
                            </p>
                            <Form className="login-form">
                                <div className="reg-inp-wrap">
                                    <Input 
                                        label="E-mail"
                                        name={email}
                                        type="email"
                                        required
                                        placeholder="Your e-mail adress"
                                        pattern="^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]{2,}"
                                        renderInvalidMessage={key => {
                                            switch (key) {
                                                case "valueMissing":
                                                    return "Please enter your email address."
                                                case "typeMismatch":
                                                case "patternMismatch":
                                                    return "Please enter valid email address."
                                                default:
                                                    return key
                                            }
                                        }}
                                    />
                                </div>
                                <div className="reg-inp-wrap">
                                    <Input 
                                        label="Password"
                                        name={password}
                                        required
                                        type="password"
                                        placeholder="Your password"
                                        renderInvalidMessage={key => {
                                            switch (key) {
                                                case "valueMissing":
                                                    return "Please enter your password."
                                                case "typeMismatch":
                                                case "patternMismatch":
                                                    return "Please enter valid password."
                                                default:
                                                    return key
                                            }
                                        }}
                                    />
                                </div>
                                <div className="login-form-bottom">
                                    <p className="login-bot-left">
                                        <span>Forgot your password? - </span>
                                        <NavLink 
                                            to="/pasReset"
                                            exact
                                        >
                                            Click here
                                        </NavLink>
                                    </p>
                                    <button 
                                        type="submit"
                                        className="log-form-btn"
                                    >
                                        Login
                                    </button>
                                </div>
                            </Form>
                        </div>
                        <div className="animation-cube-wrap">
                            <AnimationCube />
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    }   
}