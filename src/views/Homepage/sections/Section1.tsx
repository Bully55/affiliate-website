import React from "react"

import "styles/views/homepage-sections/section1"

import { NavLink } from "react-router-dom"

export interface Section1Props {
    
}

export interface Section1State {
    
}

export default
class Section1
extends React.Component<Section1Props, Section1State> {
    render() {
        return <>
            <section className="section1">
                <div className="container">
                    <div className="sect1-flex">
                        <div className="sect1-left">
                            <div className="sect1-h">
                                We Redefine The
                                <br/>
                                Quality Of Affiliation
                            </div>
                            <p className="sect1-sub-h">
                                Achieve the highest levels of conversion.
                            </p>
                            <p className="sect1-descr">
                                Take advantage of Cash On Delivery – The most profitable sales system
                            </p>
                            <div className="sect1-btns-wrap">
                                <NavLink 
                                    to="/registeradver" 
                                    className="sect1-btn"
                                    exact
                                >
                                    Advertiser
                                </NavLink>
                                <NavLink 
                                    to="/contact"
                                    className="sect1-btn" 
                                    exact
                                >
                                    Contact US
                                </NavLink>
                            </div>
                        </div>
                        <div className="sect1-right">
                            <img 
                                src="/static/images/homepage/cube.png" 
                                alt="cube" 
                                className="sect1-cube"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    }
}