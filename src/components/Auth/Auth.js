import React, {Component} from 'react';
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";
class Auth extends Component {
    constructor(props) {
        super(props);
        this.state ={
            type:'login'
        }
        this.handleType = this.handleType.bind(this);
    }
    handleType(e){
        e.stopPropagation()
        document.querySelectorAll('.authmain form .auth_btn').forEach(btn=>{
            btn.classList.remove('active__btn');
        })
        e.target.classList.add('active__btn');
        this.setState({type:e.target.dataset.auth})
    }
    render() {
        return (
            <AuthMain
                className={'authmain'}
                onClick={this.props.close}
            >
                <AuthContent >
                    <form action=""  onClick={e=>e.stopPropagation()} >
                        <div className="btn-group" >
                            <button
                                onClick={this.handleType}
                                data-auth={'login'}
                                type='button'
                                className="auth_btn active__btn waves-effect waves-light btn-large indigo lighten-5 black-text "
                            >
                                Login
                            </button>
                            <button
                                onClick={this.handleType}
                                data-auth={'register'}
                                type='button'
                                className="auth_btn waves-effect waves-green btn-large black-text  indigo lighten-5"
                            >
                                Register
                            </button>
                        </div>
                        {this.state.type === 'login' ? <Login/>:<Register/>}
                    </form>
                </AuthContent>
            </AuthMain>

        );
    }
}
const AuthContent = styled.div`
  transition: all .5s ease-in-out;
  .active__btn{
    background: green!important;
    color: #fff!important;
  }
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.9);
    form {
      background: rgba(240, 248, 255, 0.7);
      max-width: 500px;
      padding: 20px 40px;
      border-radius: 10px;
      min-width: 320px;
      .btn-group{
        padding-bottom: 20px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      button[type=button]{
        border-radius: 30px;
      }
      z-index: 10;
      cursor: auto;
    }
`
const AuthMain = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  z-index: 9;
`
export default Auth;