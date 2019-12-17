import React from "react"
import { RouteComponentProps } from "react-router"
import { Link } from "react-router-dom"
import Helmet from "react-helmet"

import Footer from "components/Footer"

import "styles/views/not-found"

export interface NotFoundProps extends RouteComponentProps<any> {}
export interface NotFoundState {}

export default
class NotFound
extends React.Component<NotFoundProps, NotFoundState> {
	render() {
		var title = "Page Not Found"
		return <>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<main className="v-not-found">
				<h1>OOPS!</h1>
				<h3>{title}</h3>
				<img src="/static/images/not-found/pic-404.png" alt="404" />
				<Link to="/" className="u-button">
					Go to Home Page
				</Link>
			</main>
			<Footer />
		</>
	}
}