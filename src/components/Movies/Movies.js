import React, {Component} from 'react';
import styled from "styled-components";
import MovieCard from "../MovieCard/MovieCard";
import Pagination from '../PaginPanel/Pagination';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state={
            total:0
        }
    }

    render() {
        const {movies=[], total, pages} = this.props
        return (
            <>
                <h2 className={'text-green light-green-text'}>Total: {total}</h2>
                <MoviesContent>
                    {
                        movies.length && movies.map(movie=>(
                            <MovieCard key={movie.imdbID} {...movie}/>
                        ))
                    }
                </MoviesContent>
                <Pagination
                    pages={pages}
                    search={this.props.search}
                    type={this.props.type}
                    searchTerm={this.props.searchTerm}/>
             </>
        );
    }
}
const MoviesContent = styled.div`
  display: grid;
  grid-template-columns:repeat(auto-fill,minmax(250px,1fr)) ;
  gap: 30px;
  padding: 30px 0;
`;
export default Movies;