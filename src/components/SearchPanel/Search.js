import React, {Component} from 'react';
import {SearchContent} from './Search.element'
import Filter from "../FilterPanel";
class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            search:'arrow',
            type:'movie'
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.typeHandler = this.typeHandler.bind(this);
        this.handleKey = this.handleKey.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    changeHandler(e){
        this.setState({search:e.target.value});
    }
    handleKey (e) {
        if(e.key ==='Enter'){
            this.props.search(this.state.search, this.state.type)
        }
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.search(this.state.search, this.state.type)
        this.props.appState(this.state.search, this.state.type);
    }
    typeHandler (type){
        this.setState({type})
    }
    render() {
        const {search} = this.props;
        return (
            <SearchContent>
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    id="first_name"
                                    name="search"
                                    value={this.state.search}
                                    onChange={this.changeHandler}
                                    onKeyDown={this.handleKey}
                                    type="text"
                                    className="validate blue-text text-lighten-5"
                                />
                                    <label htmlFor="first_name">Search Film</label>
                            </div>
                        </div>
                        <button
                            type='submit'
                            className='btn'
                        >
                            Search Film
                        </button>
                    </form>
                    <Filter
                        searchTerm={this.state.search}
                        search={search}
                        typeHandler={this.typeHandler}
                    />
                </div>
            </SearchContent>
        );
    }
}

export default Search;