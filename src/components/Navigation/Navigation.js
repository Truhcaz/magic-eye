import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav className='navbar'>
                <p className='navbar-inner' onClick={() => onRouteChange('signout')}> Sign Out </p>
            </nav>
        )
    } else {
        return (
            <nav className='navbar'>
                <p className='navbar-inner' onClick={() => onRouteChange('signin')}> Sign in </p>
                <p className='navbar-inner' onClick={() => onRouteChange('register')}> Register </p>
            </nav>
        )
    }
}

export default Navigation;