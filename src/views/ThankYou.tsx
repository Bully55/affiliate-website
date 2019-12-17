import React from "react"
import { RouteComponentProps } from "react-router"
import { Link } from "react-router-dom"
import Helmet from "react-helmet"
import { observer } from "mobx-react"

import Header from "components/Header"
import Footer from "components/Footer"

import "styles/views/thank-you"

export interface ThankYouProps extends RouteComponentProps<any> {}
export interface ThankYouState {}

@observer
export default
class ThankYou
extends React.Component<ThankYouProps, ThankYouState> {
	render() {
		var title = "Affiliate - Thank You"
		return <>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<main className="page-thank-you">
                <img className="bg-back" src="/static/images/thank-you/bg-back.png" alt="bg-back" />
                <div className="page-content">
                    <Header />
                    <div className="container">
                        <div className="back">
                            <img className="balloon-1" src="/static/images/thank-you/pic-balloon-1.png" alt="balloon-1" />
                            <img className="balloon-2" src="/static/images/thank-you/pic-balloon-2.png" alt="balloon-2" />
                        </div>
                        <div className="content">
                            <h1>Thank you!</h1>
                            <h3>
                                Thank you for your submission, our manager will contact you as soon as possible!
                            </h3>
                            <Link to="/" className="services">Look at our other services</Link>
                            <Link to="/" className="home">Home</Link>
                        </div>
                    </div>
                </div>
			</main>
            <Footer />
		</>
	}
}
