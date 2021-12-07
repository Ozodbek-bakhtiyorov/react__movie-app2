import React, {Component} from 'react';
import styled from "styled-components";
import logo from '../../images/1.png'

class MovieCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {Poster, Title, Year} = this.props;
        return (
            <MovieCardContent>
                <div className="card grey darken-3 gray-text text-lighten-5">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={Poster}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator blue-text text-lighten-3">{Title}<i
                            className="material-icons right">more_vert</i></span>
                        <p><a href="#">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{Title}<i
                            className="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        <p>Year: {Year}</p>
                    </div>
                </div>
            </MovieCardContent>
        );
    }
}
const MovieCardContent = styled.div`

`
export default MovieCard;