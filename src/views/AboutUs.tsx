import React from "react"
import { RouteComponentProps } from "react-router"
import Helmet from "react-helmet"
import { observer } from "mobx-react"

import Header from "components/Header"
import Footer from "components/Footer"

import "styles/views/about-us"

export interface AboutUsProps extends RouteComponentProps<any> {}
export interface AboutUsState {}

@observer
export default
class AboutUs
extends React.Component<AboutUsProps, AboutUsState> {
	render() {
		var title = "Affiliate - About Us"
		return <>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<main className="page-about-us">
				<Header />
                <div className="container flex-wrapper">
                    <div className="left">
                        <img className="main" src="/static/images/about-us/pic-main.png" alt="main" />
                        <img className="dot-1" src="/static/images/about-us/pic-dot-1.png" alt="dot-1" />
                        <img className="dot-2" src="/static/images/about-us/pic-dot-2.png" alt="dot-2" />
                    </div>
                    <div className="right">
                        <h1>About Tornado Leads</h1>
                        <p>
                            Smart ADV was founded by a team of investment banking professionals with a collective 100 years of consulting and business experience that has helped companies in the tech world - digital marketing, affiliate network industries, as well as many other highly competitive industries around the world. Their level of business acumen and professionalism is highly uncommon in this industry and has been the driving force behind the success of our customers and proven by the company's aggressive growth rate.<br/><br/>
                            The business experience and "will to win" attitude adds unmeasured value to our advertisers and publishers as we help to enhance the success of their businesses.<br/><br/>
                            <span>Welcome to our world – we will make you stronger!</span>
                        </p>
                    </div>
                </div>
				<Footer />
			</main>
		</>
	}
}
