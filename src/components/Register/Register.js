import React, { Component } from 'react';
import './Register.css';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmitRegister = () => {
        fetch('https://magic-eye-api.onrender.com/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
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
        return (
            <div className='global-form-container'>
                <div className="container-register">
                    <h2>Register</h2>
                    <div className="form-control">
                        <input className="input text" onChange={this.onNameChange} type="text" name="name" /> <label>Name</label>
                    </div>
                    <div className="form-control">
                        <input className="input email" onChange={this.onEmailChange} type="email" name='email-adress' /> <label>Email</label>
                    </div>
                    <div className="form-control">
                        <input className="input password" onChange={this.onPasswordChange} type="password" name="password" /> <label>Password</label>
                    </div>
                    <input className="login-btn" type={'submit'} onClick={this.onSubmitRegister} value='Register' />
                </div>
            </div>
        );
    }

}


export default Register;