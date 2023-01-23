import React, { Component } from 'react'
import './SignIn.css';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <div className='global-form-container'>
                <div className="container-signIn">
                    <h2>Please Login</h2>
                    <div className="form-control">
                        <input className="input email" type="email" onChange={this.onEmailChange} /> <label>Email</label>
                    </div>
                    <div className="form-control">
                        <input className="input password" type="password" onChange={this.onPasswordChange} /> <label>Password</label>
                    </div>
                    <button className="login-btn" onClick={this.onSubmitSignIn}> Login </button>

                    <h3> Don't have an account ? <p className="register" onClick={() => onRouteChange('register')}>Register</p> </h3>
                </div>
            </div>
        )
    }
}

export default SignIn;