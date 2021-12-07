import React, {Component} from 'react';
import {
    HeaderContent
} from './Header.element'
import logo from '../../images/logo.png'
class Header extends Component {
    constructor(props) {
        super(props);
    }
    menuOpen(){
        document.querySelector('.sidenav').style.cssText=`
            transition:all .4s ease-in-out;
            transform:translateX(0)!important;
        `
    }
    menuClose(e){
        console.log(e.target);
        document.querySelector('.sidenav').style.cssText=`
            transition:all .4s ease-in-out;
            transform:translateX(-100%)!important;
        `;
    }
    render() {
        const {signHandler} = this.props;
        return (
            <HeaderContent className={'z-depth-5'}>
                <nav className="nav-extended teal darken-2">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo"><img src={logo} alt="Logo__site"/>       </a>
                        <a href="#" onClick={this.menuOpen} data-target="mobile-demo" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li ><a  href="#">Home</a></li>
                            <li><a  href="#">Movies</a></li>
                            <li><a href="#">Contact</a></li>
                            <li>
                                <a
                                    href="#"
                                    data-type='sign-in-up'
                                    onClick={e=>{signHandler(e);this.menuClose(e)}}
                                >
                                    Sign In/Up
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <button onClick={this.menuClose} className={'btn'}><i className='material-icons'>close</i></button>
                    <li><a onClick={this.menuClose} href="#">Home</a></li>
                    <li><a onClick={this.menuClose} href="#">Movies</a></li>
                    <li><a onClick={this.menuClose} href="#">Contact</a></li>
                    <li>
                        <a
                            href="#"
                            data-type='sign-in-up'
                            onClick={(e)=>{signHandler(e);this.menuClose(e)}}

                        >
                            Sign In/Up
                        </a>
                    </li>
                </ul>
            </HeaderContent>
        );
    }
}

export default Header;