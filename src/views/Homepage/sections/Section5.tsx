import React from "react"

import "styles/views/homepage-sections/section5"

export interface Section5Props {
    
}

export interface Section5State {
    slide: number
}

export default
class Section5
extends React.Component<Section5Props, Section5State> {

    state = {
        slide: 0
    }

    startPoint = {
        x: 0,
        y: 0
    }

    get count(): number {
        if (typeof window == "undefined")
            return 5
        
        switch (true) {
            case window.innerWidth < 1366 && window.innerWidth > 920:
                return 4
            case window.innerWidth < 920 && window.innerWidth > 768:
                return 3
            case window.innerWidth < 768 && window.innerWidth > 576:
                return 2
            case window.innerWidth < 576:
                return 1
            default:
                return 5
        }
    }

    get slidesCount(): number {
        return (this.total - this.count)
    }

    total: number = 8

    componentDidMount() {
        window.addEventListener("resize", this.__forceUpdate)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.__forceUpdate)
    }

    __forceUpdate = () => {
        this.forceUpdate()
    }

    nextSlide = () => {
        let { slide } = this.state
        this.setState({
            slide: slide >= this.slidesCount
                ? 0
                : slide + 1
        })
    }

    prevSlide = () => {
        let { slide } = this.state
        this.setState({
            slide: slide <= 0
                ? this.slidesCount
                : slide - 1
        })
    }

    handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        let touch = event.targetTouches[0]
        this.startPoint = {
            x: touch.clientX,
            y: touch.clientY
        }
    }

    handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        if(this.startPoint) {
            let touch = event.targetTouches[0]
            let { clientX } = touch

            let swipeSize = this.startPoint.x - clientX

            if(Math.abs(swipeSize) >= 100) {
                this.startPoint = undefined
                if (swipeSize > 0)
                    this.nextSlide()
                else
                    this.prevSlide()
            }
        }
    }

    render() {
        let { slide } = this.state
        return <>
            <section className="section5">
                <div className="container">
                    <div className="sect5-h">
                        <span>
                            Trusted By The World’s Best
                        </span>
                    </div>
                    <div className="sect5-slider-wrap">
                        <div 
                            className="sect5-slider-arrow sect5-prev-arrow"
                            onClick={this.prevSlide}
                        >
                            <img src="/static/images/homepage/prev-arrow.svg" alt="prev-arrow"/>
                        </div>
                        <div 
                            className="sect5-slider-arrow sect5-next-arrow"
                            onClick={this.nextSlide}
                        >
                            <img src="/static/images/homepage/next-arrow.svg" alt="next-arrow"/>
                        </div>
                        <div className="slider-wrapper">
                            <div 
                                className="sect5-slider"
                                style={{
                                    // width: `${150%}%`,
                                    transform: `translateX(-${100 / this.count * slide}%)`
                                }}
                                onTouchStart={this.handleTouchStart}
                                onTouchMove={this.handleTouchMove}
                            >
                                <div className="sect5-slide">
                                    <img src="/static/images/homepage/slide1.svg" alt="slide"/>
                                </div>
                                <div className="sect5-slide">
                                    <img src="/static/images/homepage/slide2.svg" alt="slide"/>
                                </div>
                                <div className="sect5-slide">
                                    <img src="/static/images/homepage/slide3.svg" alt="slide"/>
                                </div>
                                <div className="sect5-slide">
                                    <img src="/static/images/homepage/slide4.svg" alt="slide"/>
                                </div>
                                <div className="sect5-slide">
                                    <img src="/static/images/homepage/slide5.png" alt="slide"/>
                                </div>
                                <div className="sect5-slide">
                                    <img src="/static/images/homepage/slide1.svg" alt="slide"/>
                                </div>
                                <div className="sect5-slide">
                                    <img src="/static/images/homepage/slide2.svg" alt="slide"/>
                                </div>
                                <div className="sect5-slide">
                                    <img src="/static/images/homepage/slide3.svg" alt="slide"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    }
}