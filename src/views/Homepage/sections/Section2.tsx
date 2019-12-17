import React from "react"

import "styles/views/homepage-sections/section2"

export interface Section2Props {
    
}

export interface Section2State {
    
}

type Section2Data = {
    src: string,
    title: string,
    description: string
}

export default
class Section2
extends React.Component<Section2Props, Section2State> {

    contentData: Section2Data[] = [
        {
            src: "/static/images/homepage/sect2-img1.svg",
            title: "Advertisers",
            description: " We know how to make it easier for you to make money. We provide you with all key tools needed to increase your profits. "
        },
        {
            src: "/static/images/homepage/sect2-img2.svg",
            title: "Carefully selected products",
            description: "For us, there are none more equal than others. Do you want to make money on fair terms? Discover the fairest bonus system in the sector. "
        },
        {
            src: "/static/images/homepage/sect2-img3.svg",
            title: "Functional tools",
            description: " The highest converting products online from leading advertisers. This is the only guarantee of such high payouts. "
        }
    ]

    render() {
        return <>
            <section className="section2">
                <div className="container">
                    <div className="sect2-head">
                        <h2>
                            Our Advantages
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad
                            <br/>
                            minim veniam, quis nostrud exercitation.
                        </p>
                    </div>
                    <div className="sect2-content">
                        {this.contentData.map((data, i) => {
                            return (
                                <div 
                                    className="sect2-item"
                                    key={i}
                                >
                                    <img src={data.src} alt=""/>
                                    <h2> {data.title} </h2>
                                    <p> {data.description} </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    }
}