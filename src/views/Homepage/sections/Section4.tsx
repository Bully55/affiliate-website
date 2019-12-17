import React from "react"

import "styles/views/homepage-sections/section4"

export interface Section4Props {
    
}

export interface Section4State {
    
}

export default
class Section4
extends React.Component<Section4Props, Section4State> {
    render() {
        return <>
            <section className="section4">
                <div className="container">
                    <div className="sect4-head">
                        <h2>
                            What our Customers say?
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.
                        </p>
                    </div>
                    <div className="sect4-content">
                        <div className="content-left">
                            <img 
                                src="/static/images/homepage/world.svg" 
                                alt=""
                                className="sect4-map"
                            />
                            <div className="content-photos">
                                <img className="first" src="/static/images/homepage/sect4-photo1.svg" alt=""/>
                                <img className="second" src="/static/images/homepage/sect4-photo2.png" alt=""/>
                                <img className="third" src="/static/images/homepage/sect4-photo3.svg" alt=""/>
                                <img className="fourth" src="/static/images/homepage/sect4-photo4.svg" alt=""/>
                                <img className="fifth" src="/static/images/homepage/sect4-photo5.png" alt=""/>
                                <img className="sixth" src="/static/images/homepage/sect4-photo6.svg" alt=""/>
                            </div>
                        </div>
                        <div className="content-right">
                            <p className="comment">
                                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus."
                            </p>
                            <p className="comment-author">
                                <span>
                                    <span className="name">
                                        - Sara Smith 
                                    </span>
                                    <br/>
                                    CEO ABC Company
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    }
}