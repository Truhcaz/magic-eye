import React from "react";
import Tilt from 'react-parallax-tilt';
import eye from './eye.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo">
            <Tilt className="Tilt" tiltMaxAngleY='40' tiltMaxAngleX='40'>
                <div className="logo-inner">
                    <img alt='eye logo' src={eye} />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;