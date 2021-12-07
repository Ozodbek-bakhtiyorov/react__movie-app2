import React, {Component} from 'react';
import styled from "styled-components";
import Search from "../../components/SearchPanel";
import Filter from "../../components/FilterPanel";
import Movies from "../../components/Movies/Movies"
import SliderComp from "../../components/Slider";
import Loader from "../../components/Loader/Loader";
import Auth from "../../components/Auth/Auth";
import Posts from "../../components/Posts";
class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            search,
            appState,
            posts,
            searchHandler,
            addpost,
            likeHandler,
            favHandler,
            deleteHandler,
            visiblePosts
        }=this.props;
        return (
            <MainContent>
                <SliderComp/>
                <Search
                    search={search}
                    appState={appState}
                />
                <Movies {...this.props}/>
                <Posts
                    visiblePosts={visiblePosts}
                    addPost={addpost}
                    likeHandler={likeHandler}
                    favHandler={favHandler}
                    deleteHandler={deleteHandler}
                    search={searchHandler}
                />
            </MainContent>

        );
    }
}
const MainContent = styled.main`
  min-height: 70vh;
`
export default Main;