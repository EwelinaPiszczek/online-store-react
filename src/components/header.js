import React from 'react';
import logo from '../images/logo.png';
import './header.css';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            message: "",
            isLoggedIn: false, // new state variable to track login status
        };
    }
  
    handleLogin = () => {
        const { username, password } = this.state;
        // perform login logic here, e.g. checking username and password against a database
        // for simplicity, we will just check if the username is "admin" and the password is "password"
        if (username === "admin" && password === "password") {
            this.setState({
                message: `Welcome back, ${username}!`,
                isLoggedIn: true, // set the login status to true if successful
        });
        } else {
            alert("Invalid username or password.");
        }
    };
  
    render() {
        const { username, password, message, isLoggedIn } = this.state;
        return (
            <div>
            {!isLoggedIn && ( // render the input fields and login button only if not logged in
            <div className="login-form">
                <input className='login-form-field'
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => this.setState({ username: e.target.value })}
                />
                <input className='login-form-field'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => this.setState({ password: e.target.value })}
                />
                <button className='login-button' onClick={this.handleLogin}>Log in</button>
            </div>
            )}
            {message && <h1 className='login'>{message}</h1>} 
            </div>
        );
    }
}

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} className="App-logo" alt="logo" />
            <Login />
        </header>
    );
}

export default Header;