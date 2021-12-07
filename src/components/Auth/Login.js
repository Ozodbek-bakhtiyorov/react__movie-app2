import React, {Component} from 'react';
import styled from "styled-components";

class Login extends Component {
    render() {
        return (
                <LoginContent className="col">
                    <div className="input-field col s6  ">
                        <i className="material-icons prefix">email</i>
                        <input
                            id="icon_prefix"
                            type="email"
                            name={"email"}
                            className="validate"
                        />
                            <label htmlFor="icon_prefix">Email</label>
                    </div>
                    <div className="input-field col s6">
                        <i className="material-icons prefix">lock</i>
                        <input
                            id="password"
                            type="text"
                            className="validate"
                            name={'password'}
                        />
                            <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field col s6">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </LoginContent>
        );
    }
}
export const LoginContent = styled.div`
  label {
    color: black !important;
  }

  input {
    border-bottom: 1px solid rgba(0, 0, 0, 0.7) !important;
  }
  button[type=submit]{
    width: 100%;
    border-radius: 10px;
    background: darkblue!important;
    height: 60px;
  }
`
export default Login;