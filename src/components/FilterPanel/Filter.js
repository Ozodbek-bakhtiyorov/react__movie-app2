import React, {Component} from 'react';
import styled from "styled-components";

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state={
            type:'movie'
        }
        this.radioHandler = this.radioHandler.bind(this);
    }
radioHandler(e){
        console.log(e.target.dataset.type);
        this.setState(()=>({type:e.target.dataset.type}),()=>{
            this.props.search(this.props.searchTerm,this.state.type)
            this.props.typeHandler(this.state.type)
        })
}
    render() {
        return (
            <FilterContent>
                <p>
                    <label>
                        <input
                            className="with-gap"
                            name="filter"
                            type="radio"
                            data-type='movie'
                            onChange={this.radioHandler}
                            checked={this.state.type ==='movie'}
                        />
                        <span>Movies</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            className="with-gap"
                            name="filter"
                            type="radio"
                            data-type='series'
                            onChange={this.radioHandler}
                            checked={this.state.type ==='series'}
                        />
                        <span>Series</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            className="with-gap"
                            name="filter"
                            type="radio"
                            data-type='episode'
                            onChange={this.radioHandler}
                            checked={this.state.type ==='episode'}
                        />
                        <span>Episode</span>
                    </label>
                </p>
            </FilterContent>
        );
    }
}
const FilterContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px , 1fr));
  border-bottom: 1px solid rgba(255,255,255, 0.5)
`;

export default Filter;