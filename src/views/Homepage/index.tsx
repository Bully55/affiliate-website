import React from "react"
import { RouteComponentProps } from "react-router"
import Helmet from "react-helmet"
import { observer } from "mobx-react"

import "styles/views/homepage"


import Store from "stores/Sample"
import Header from "components/Header"
import Footer from "components/Footer"
import Section1 from "./sections/Section1"
import Section2 from "./sections/Section2"
import Section3 from "./sections/Section3"
import Section4 from "./sections/Section4"
import Section5 from "./sections/Section5"

export interface HomepageProps extends RouteComponentProps<any> {}
export interface HomepageState {}

@observer
export default
class Homepage
extends React.Component<HomepageProps, HomepageState> {
	render() {
		var title = "Affiliate"
		return <>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<main className="v-homepage">
				<Header />
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<Footer />
				{/* <MobMenu /> */}
			</main>
		</>
	}
}