import React from "react"
import { RouteComponentProps, Switch, Route, Redirect } from "react-router-dom"

import "styles/fonts"
import "styles/main"
import "styles/universal"

import Homepage from "views/Homepage"
import AboutUs from "views/AboutUs"
import ThankYou from "views/ThankYou"
import NotFound from "views/NotFound"
import Register from "views/Register"
import RegisterAdver from "views/RegisterAdver"
import Contact from "views/Contact" 
import ContactPub from "views/ContactPub"
import Login from "views/Login"
import PasReset from "views/PasReset"

export interface ApplicationProps extends RouteComponentProps<any> {
	locale: string
}
export interface ApplicationState {}

export default
class Application
extends React.Component<ApplicationProps, ApplicationState> {

	componentDidUpdate(prevProps: ApplicationProps) {
		if (this.props.location.pathname != prevProps.location.pathname) {
			window.scrollTo(0, 0)
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
		}
	}

	render() {
		return <>
			<Switch>
				<Route
					path="/"
					exact
					component={Homepage}
				/>
				<Route
					path="/about-us"
					exact
					component={AboutUs}
				/>
				<Route
					path="/thank-you"
					exact
					component={ThankYou}
				/>
				<Route
					path="/not-found"
					exact
					component={NotFound}
				/>
				<Route
					path="/register"
					exact
					component={Register}
				/>
				<Route
					path="/registeradver"
					exact
					component={RegisterAdver}
				/>
				<Route
					path="/contact"
					exact
					component={Contact}
				/>
				<Route
					path="/contactpub"
					exact
					component={ContactPub}
				/>
				<Route
					path="/login"
					exact
					component={Login}
				/>
				<Route
					path="/pasReset"
					exact
					component={PasReset}
				/>
				<Redirect to="/not-found" />
			</Switch>
		</>
	}
}