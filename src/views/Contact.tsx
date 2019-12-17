import React from "react"

import "styles/views/contact"
import Header from "components/Header"
import Footer from "components/Footer"
import Input from "components/Input"
import InputSelect from "components/inputSelect"
import { NavLink } from "react-router-dom"
import Form from "components/Forms/Form"

export interface ContactsProps {
    onSubmit?: (data: any) => void
}

export interface ContactsState {
    
}

export default
class Contacts
extends React.Component<ContactsProps, ContactsState> {

    names = {
        nickname : "Nickname",
        email: "EmailAdress",
        skypeId: "SkypeId",
        subject: "Subject",
        message: "Message"
    }

    static defaultProps = {
        onSubmit: () => {}
    }

    // extractData = (form: HTMLFormElement): any => {
    //     let data = {}
    //     try {
    //         ;[...form.elements].forEach((element: HTMLInputElement) => {
    //             if (element.name)
    //                 data[element.name] = element.value
    //         })
    //         console.nfo(`Form data extracted`, data)
    //     } catch (e) {
    //         console.no(`Error occured during form data extraction - *${e}*`)
    //     }
    //     return data
    // }

    // handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault()
    //     this.props.onSubmit(this.extractData(event.currentTarget))
    //     return false
    // }

    render() {
        const { 
            nickname,
            email, 
            skypeId,
            subject,
            message } = this.names
        return <>
            <main className="v-contacts">
                <div className="container">
                    <div className="cont-flex">
                        <Form 
                            className="cont-form"
                            // onSubmit={this.handleSubmit}
                        >
                            <div className="u-form-close">
                                <NavLink
                                    to="/"
                                    exact
                                >
                                    <img src="/static/images/close.svg" alt="close"/>
                                </NavLink>
                            </div>
                            <div className="u-title">Contact</div>
                            <p className="u-sub-title">Are you interested in cooperation? Contact us.</p>
                            <div className="reg-inp-wrap">
                                <Input 
                                    label="Full name"
                                    name={nickname}
                                    type="text"
                                    required
                                    placeholder="Your full name"
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
                                <Input 
                                    label="Subject"
                                    type="text"
                                    name={subject}
                                    placeholder="Topic of your message"
                                />
                            </div>
                            <div className="reg-inp-wrap">
                                <Input 
                                    label="Message body"
                                    type="text"
                                    placeholder="Ask us about anything"
                                    textArea={true}
                                    name={message}
                                />
                            </div>
                            <div className="form-bottom">
                                <button 
                                    className="form-btn"
                                    type="submit"
                                >
                                    Advertiser
                                </button>
                            </div>
                        </Form>
                        <div className="contact-right">
                            <img 
                                src="/static/images/contact/contacts-path.png"
                                alt="path"
                                className="contacts-path-img"
                            />
                            <img 
                                src="/static/images/contact/contact-path1.png"
                                alt="path"
                                className="contacts-path1-img"
                            />
                            <img 
                                src="/static/images/contact/contacts-lines.png"
                                alt="lines"
                                className="contacts-lines-img"
                            />
                            <img 
                                src="/static/images/contact/contact-circle.png" 
                                alt="circle" 
                                className="contacts-circle-img"
                            />
                            <img 
                                src="/static/images/contact/contact-dots.png" 
                                alt="dots" 
                                className="contacts-dotes-img"
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    }
}