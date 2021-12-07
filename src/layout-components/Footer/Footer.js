import React, {Component} from 'react';
import {FooterContent} from './Footer.element'
export default class Footer extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {signHandler} = this.props;
        return(
            <FooterContent  className="page-footer blue darken-4">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Footer Content</h5>
                                <p className="grey-text text-lighten-4">You can use rows and columns here to organize
                                    your footer content.</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                    <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Movies</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Contact</a></li>
                                    <li><a onClick={signHandler} data-type={'sign-in-up'} className="grey-text text-lighten-3" href="#!">Sign In/Up</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © {new Date().getFullYear()} Copyright Text
                            <a className="grey-text text-lighten-4 right" href="#!">Home</a>
                        </div>
                    </div>
            </FooterContent>
        )
    }
}