import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password:'',
        }

        this.handleLogin = this.handleLogin.bind( this )
    }

    updateUsername(val) {
        this.setState({
            username: val
        })
    }

    updatePassword(val) {
        this.setState({
            password: val
        })
    }

    handleLogin() {
        alert(`Username: ${ this.state.username } Password: ${ this.state.password }`);
      }

    render() {
        return(
            <div>
                <input onChange = { (e) => this.updateUsername(e.target.value) } type='text' />
                <input onChange = { (e) => this.updatePassword(e.target.value) } type='text' />
                <button onClick = { this.handleLogin }>Login</button>
            </div>
        )
        }
    }
export default Login