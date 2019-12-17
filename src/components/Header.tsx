import React from "react"
import { NavLink } from "react-router-dom"

import "styles/components/header"

export interface HeaderProps {
    
}

export interface HeaderState {
    stateMenu?: boolean
}

export default
class Header
extends React.Component<HeaderProps, HeaderState> {

    state = {
        stateMenu: false
    }

    componentDidMount () {
        document.addEventListener("click", this.closeMenu)
    }

    componentWillUnmount () {
        document.removeEventListener("click", this.closeMenu)
    }

    openMenu = (event: React.MouseEvent) => {
        var element = event.currentTarget
        event.stopPropagation()
        event.nativeEvent.stopImmediatePropagation()
        this.setState({
            stateMenu: true
        })
    }

    closeMenu = () => {
        this.setState({
            stateMenu: false
        })
    }

    render() {
        return <>
            <header className="main-head">
                <div className="container">
                    <div className="head-flex">
                        <NavLink to="/" className="head-logo">
                            <img 
                                src="/static/images/homepage/logo.svg" 
                                alt="logo"
                            />
                        </NavLink>
                        <div className="head-right">
                            <div 
                                className={`head-menu ${this.state.stateMenu 
                                    ? "open" 
                                    : "close"}`
                                }
                                onClick={event => {
                                    event.stopPropagation()
                                    event.nativeEvent.stopImmediatePropagation()
                                }}
                            >
                                <div className="menu-close">
                                    <img 
                                        src="/static/images/close.svg" 
                                        alt="close"
                                        onClick={this.closeMenu}
                                    />
                                </div>
                                <NavLink
                                    to="/"
                                    className="menu-logo"
                                    exact
                                >
                                    <img 
                                        src="/static/images/homepage/logo.svg" 
                                        alt="logo" 
                                    />
                                </NavLink>
                                <ul className="head-right-menu">
                                    <li>
                                        <NavLink 
                                            to="/" 
                                            className="menu-item"
                                            exact
                                        >
                                            <span>H</span>
                                            <span>o</span>
                                            <span>m</span>
                                            <span>e</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                            to="/registeradver"
                                            className="menu-item"
                                            exact
                                        >
                                            <span>A</span>
                                            <span>d</span>
                                            <span>v</span>
                                            <span>e</span>
                                            <span>r</span>
                                            <span>t</span>
                                            <span>i</span>
                                            <span>s</span>
                                            <span>e</span>
                                            <span>r</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                            to="/contactpub" 
                                            className="menu-item"
                                            exact
                                        >
                                            <span>P</span>
                                            <span>u</span>
                                            <span>b</span>
                                            <span>l</span>
                                            <span>i</span>
                                            <span>s</span>
                                            <span>h</span>
                                            <span>e</span>
                                            <span>r</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                            to="/about-us" 
                                            className="menu-item"
                                            exact
                                        >
                                            <span>A</span>
                                            <span>b</span>
                                            <span>o</span>
                                            <span>u</span>
                                            <span>t </span>
                                            <span>U</span>
                                            <span>S</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                            to="/contact" 
                                            className="menu-item"
                                            exact
                                        >
                                            <span>C</span>
                                            <span>o</span>
                                            <span>n</span>
                                            <span>t</span>
                                            <span>a</span>
                                            <span>c</span>
                                            <span>t </span>
                                            <span>U</span>
                                            <span>S</span>
                                        </NavLink>
                                    </li>
                                </ul>
                                <div className="mob-menu-btns">
                                    <NavLink 
                                        to="/login"
                                        className="head-btn" 
                                        exact
                                    >
                                        Log In
                                    </NavLink>
                                    <NavLink 
                                        to="/register"
                                        className="head-btn" 
                                        exact
                                    >
                                        Register
                                    </NavLink>
                                </div>
                            </div>
                            <NavLink 
                                to="/login"
                                className="head-btn" 
                                exact
                            >
                                Log In
                            </NavLink>
                            <NavLink 
                                to="/register"
                                className="head-btn" 
                                exact
                            >
                                Register
                            </NavLink>
                            <div 
                                className="open-menu"
                                onClick={this.openMenu}
                            >
                                <img src="/static/images/menu.svg" alt="menu"/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    }
}