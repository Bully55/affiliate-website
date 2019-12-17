import React from "react"

import "styles/views/homepage-sections/section3.sass"

import { NavLink } from "react-router-dom"

export interface Section3Props {
    
}

export interface Section3State {
    
}

export default
class Section3
extends React.Component<Section3Props, Section3State> {
    render() {
        return <>
            <section className="section3">
                <div className="container">
                    <div className="sect3-h">
                        <span>Join now</span>
                    </div>
                    <div className="sect3-content">
                        <div>
                            <div className="sect3-items-head">
                                <p className="sect3-items-h">
                                    01
                                    <span>Advertisers</span>
                                </p>
                                <p className="sect3-items-h">
                                    02
                                    <span>Publishers</span>
                                </p>
                            </div>
                            <div className="sect3-items-wrap">
                                <div className="sect3-item">
                                    <p className="sect3-items-h">
                                        01
                                        <span>Advertisers</span>
                                    </p>
                                    <div className="sect3-item-content">
                                        <p>
                                            The largest publishers in the world do business with us for a reason...
                                        </p>
                                        <p>
                                            We deliver results and service them like no other network in the world. Our high budgets, large payout and diversified offer portfolio make the Smart ADV network the one-stop-shop to get the job done.
                                        </p>
                                        <p>
                                            Tornado Leads was founded to give you the tools you need for maximum success by providing one-on-one expert advice and the best performing campaigns at the highest rates, resulting in more revenue for you!
                                        </p>
                                    </div>
                                    <NavLink 
                                        to="/registeradver" 
                                        className="sect3-item-btn"
                                        exact
                                    >
                                        Advertiser
                                    </NavLink>
                                </div>
                                <div className="sect3-item">
                                    <p className="sect3-items-h">
                                        02
                                        <span>Publishers</span>
                                    </p>
                                    <div className="sect3-item-content">
                                        <p>
                                            The Smart ADV team is oriented and aligned with our advertising clients...
                                        </p>
                                        <p>
                                            We get paid to deliver results. We focus our efforts to source new customers for your business through multiple digital channels that aren’t easily identifiable.
                                        </p>
                                        <p>
                                            How? The Smart ADV affiliate network, which reaches millions of people around the world on an hourly basis, can get your message in front of the target that will want and desire your products and/or services.
                                        </p>
                                    </div>
                                    <NavLink 
                                        to="/contact"
                                        className="sect3-item-btn"
                                        exact
                                    >
                                        Contact US
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    }
}