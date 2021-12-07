import React, {Component} from 'react';
import styled from "styled-components";
import {LoginContent} from './Login'
class Register extends Component {
    render() {
        return (
            <RegisterContent>
                <LoginContent className="row">
                    <div className="input-field col s6  ">
                        <input id="firstname" type="text" className="validate"/>
                        <label htmlFor="firstname">Firstname</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="lastname" type="text" className="validate"/>
                        <label htmlFor="lastname">LastName</label>
                    </div>
                </LoginContent>
                <LoginContent className="col">
                    <div className="input-field col s6  ">
                        <i className="material-icons prefix">email</i>
                        <input id="icon_prefix" type="email" className="validate"/>
                        <label htmlFor="icon_prefix">Email</label>
                    </div>
                    <div className="input-field col s6">
                        <i className="material-icons prefix">phonelink_lock</i>
                        <input id="password" type="text" className="validate"/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field col s6">
                        <i className="material-icons prefix">screen_lock_rotation</i>
                        <input id="repeatPassrod" type="text" className="validate"/>
                        <label htmlFor="repeatPassrod">Confirm Password</label>
                    </div>
                    <div className="input-field col s6">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </LoginContent>
            </RegisterContent>
        );
    }
}
const RegisterContent = styled.div`
  
`
export default Register;