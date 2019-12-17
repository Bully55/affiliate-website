import React from "react"

import "styles/views/pas-reset"
import Header from "components/Header"
import Footer from "components/Footer"
import AnimationCube from "components/AnimationCube"
import Input from "components/Input"
import { NavLink } from "react-router-dom"
import Form from "components/Forms/Form"

export interface PasResetProps {
    
}

export interface PasResetState {
    
}

export default
class PasReset
extends React.Component<PasResetProps, PasResetState> {

    names = { email: "EmailAdress" }
    render() {
        const { email } = this.names
        return <>
            <main className="v-pas-reset">
                <div className="container">
                    <div className="u-form-close">
                        <NavLink
                            to="/"
                            exact
                        >
                            <img src="/static/images/close.svg" alt="close"/>
                        </NavLink>
                    </div>
                    <div className="pass-flex">
                        <div className="pass-left">
                            <div className="u-title">Reset password</div>
                            <p className="u-sub-title">
                                Enter the email address associated with your account, 
                                <br/>
                                and we’ll email you a link to reset your password.
                            </p>
                            <Form className="pass-form">
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
                                <div className="pass-form-bottom">
                                    <p className="pass-bot-left">
                                        <NavLink 
                                            to="/login"
                                            exact
                                        >
                                            <img src="/static/images/reset-password/arrow.svg" alt="arrow"/>
                                            <span>Back to Login</span>
                                        </NavLink>
                                    </p>
                                    <button 
                                        className="pass-form-btn"
                                        type="submit"
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