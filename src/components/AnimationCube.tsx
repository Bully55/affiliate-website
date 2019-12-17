import React from "react"

import "styles/components/animation-cube"

export interface AnimationCubeProps {
    
}

export interface AnimationCubeState {
    
}

export default
class AnimationCube
extends React.Component<AnimationCubeProps, AnimationCubeState> {
    render() {
        return <>
            <div className="animation-cube">
                <img 
                    src="/static/images/login/stars.svg" 
                    alt="stars" 
                    className="login-stars"
                />
                <img 
                    src="/static/images/login/planet1.png" 
                    alt="planet" 
                    className="planet1 anim-cube-img"
                />
                <img 
                    src="/static/images/login/planet2.png" 
                    alt="planet" 
                    className="planet2 anim-cube-img"
                />
                <img 
                    src="/static/images/login/planet3.png" 
                    alt="planet" 
                    className="planet3 anim-cube-img"
                />
                <img 
                    src="/static/images/login/planet4.png" 
                    alt="planet" 
                    className="planet4 anim-cube-img"
                />
                <img 
                    src="/static/images/login/triangle.png" 
                    alt="triangle" 
                    className="triangle anim-cube-img"
                />
                <img 
                    src="/static/images/login/cube.png" 
                    alt="cube" 
                    className="cube anim-cube-img"
                />
                <img 
                    src="/static/images/login/lines.png" 
                    alt="lines" 
                    className="lines anim-cube-img"
                />
            </div>
        </>
    }
}