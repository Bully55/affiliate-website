import React from "react"
import { NavLink } from "react-router-dom"

import "styles/views/register"

import Header from "components/Header"
import Footer from "components/Footer"
import Input from "components/Input"
import InputSelect from "components/inputSelect"
import Form from "components/Forms/Form"

export interface RegisterProps {
    
}

export interface RegisterState {
    
}

export default
class Register
extends React.Component<RegisterProps, RegisterState> {

    names = {
        nickname : "Nickname",
        email: "EmailAdress",
        password: "Password",
        confirmPas: "Confirm Password",
        skypeId: "SkypeId",
        phoneNumber: "PhoneNumber",
        info: "Info"
    }

    render() {
        const { 
            nickname,
            email, 
            password,
            confirmPas,
            skypeId,
            phoneNumber,
            info } = this.names
        return <>
            <main className="v-register">
                <div className="container">
                    <div className="reg-flex">
                        <Form className="reg-form">
                            <div className="u-form-close">
                                <NavLink
                                    to="/"
                                    exact
                                >
                                    <img src="/static/images/close.svg" alt="close"/>
                                </NavLink>
                            </div>
                            <div className="u-title">Register</div>
                            <p className="u-sub-title">We believe in fair partnership.</p>
                            <div className="reg-inp-wrap">
                                <Input 
                                    label="Nickname"
                                    name={nickname}
                                    type="text"
                                    required
                                    placeholder="Your nickname"
                                    iconPath="/static/images/register/user.svg"
                                    pattern="[A-Za-z0-9][A-Za-z0-9-\s]*"
                                    renderInvalidMessage={key => {
                                        switch (key) {
                                            case "valueMissing":
                                                return "Please enter your Nickname."
                                            case "patternMismatch":
                                                return "Please enter valid Nickname."
                                            default:
                                                return key
                                        }
                                    }}
                                />
                            </div>
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
                                    label="Skype ID"
                                    name={skypeId}
                                    type="text"
                                    placeholder="Your Skype name"
                                />
                            </div>
                            <div className="reg-inp-wrap">
                                <InputSelect 
                                    label="Phone number"
                                    name={phoneNumber}
                                    required
                                    type="tel"
                                    pattern="[0-9-]*"
                                    placeholder="Example: 555-6789"
                                    renderInvalidMessage={key => {
                                        switch (key) {
                                            case "valueMissing":
                                                return "Please enter your phone number."
                                            case "patternMismatch":
                                                return "Enter you phone number in international format. Example: 123-4567"
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
                            <div className="reg-inp-wrap">
                                <Input 
                                    label="Confirm password"
                                    type="password"
                                    name={confirmPas}
                                    required
                                    placeholder="Confirm your password"
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
                            <div className="reg-inp-wrap">
                                <Input 
                                    label="Where did you find out about us?"
                                    type="text"
                                    name={info}
                                />
                            </div>
                            <div className="reg-form-bottom">
                                <div className="reg-check-wrap">
                                    <input type="checkbox" className="check-inp" id="check-inp"/>
                                    <label htmlFor="check-inp" className="reg-bottom-left">
                                        <div className="reg-checkbox"></div>
                                        <div>
                                            <span>I have read and accept </span>
                                            <a href="#">Terms of use</a>
                                        </div>
                                    </label>
                                </div>
                                <button 
                                    className="reg-form-btn"
                                    type="submit"
                                >
                                    Create account
                                </button>
                            </div>
                        </Form>
                        <div className="register-right">
                            <img 
                                src="/static/images/register/line.png" 
                                alt="triangle" 
                                className="register-line-img"
                            />
                            <img 
                                src="/static/images/register/triangle1.png" 
                                alt="triangle" 
                                className="register-triangle1-img"
                            />
                            <img 
                                src="/static/images/register/triangle2.png" 
                                alt="triangle" 
                                className="register-triangle2-img"
                            />
                            <img 
                                src="/static/images/register/triangle3.png" 
                                alt="triangle" 
                                className="register-triangle3-img"
                            />
                            <img 
                                src="/static/images/register/path.png" 
                                alt="path" 
                                className="register-path-img"
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    }
}