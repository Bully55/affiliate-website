import React from "react"

import 'styles/components/footer'
import { NavLink } from "react-router-dom"

export interface FooterProps {
    
}

export interface FooterState {
    
}

type dataNav = {
    link: string,
    name: string
}

export default
class Footer
extends React.Component<FooterProps, FooterState> {

    navigations: dataNav[] = [
        {
            link: "/",
            name: "Home"
        },
        {
            link: "/about-us",
            name: "About Us"
        },
        {
            link: "/",
            name: "Services"
        },
        {
            link: "/contact",
            name: "Contact Us"
        }
    ]

    policies: string[] = [
        "Privacy Policy",
        "Terms and Conditions"
    ]

    render() {
        return <>
            <footer className="main-footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <img src="/static/images/homepage/logo-footer.png" alt=""/>
                        </div>
                        <div className="footer-right">
                            <p className="foot-descr">
                                Tornado Leads is part of the Digital Media Solutions family of brands. Visit DMS Insights for digital marketing industry news.
                            </p>
                            <ul className="footer-navs foot-list">
                                {this.navigations.map((nav, key) => {
                                    return (
                                        <li
                                            key={key}
                                        >
                                            <NavLink
                                                to={nav.link}
                                            >
                                                {nav.name}
                                            </NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                            <ul className="footer-policies foot-list">
                                {this.policies.map((item, key) => {
                                    return (
                                        <li
                                            key={key}
                                        >
                                            <a href="#">{item}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="footer-icons">
                            <a href="#">
                                <img src="/static/images/homepage/Facebook.svg" alt=""/>
                            </a>
                            <a href="#">
                                <img src="/static/images/homepage/Twitter.svg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    Copyright © 2019 Brand Name create
                </div>
            </footer>
        </>
    }
}