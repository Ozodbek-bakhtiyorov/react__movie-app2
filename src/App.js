import React,{Component} from "react";
import Header from "./layout-components/Header";
import Footer from "./layout-components/Footer";
import styled from "styled-components";
import Main from "./layout-components/Main/Main";
import Loader from "./components/Loader/Loader";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";
import Auth from "./components/Auth/Auth";
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            movies:'',
            total:'',
            loading:true,
            pages:[],
            type:'movie',
            searchTerm:'arrow',
            auth:{
                visible:false,
                users:[],
            },
            posts:[],
            term:''
        }
        this.closeHandler = this.closeHandler.bind(this);
        this.signHandler = this.signHandler.bind(this);
        this.search = this.search.bind(this);
        this.AppStateHandler = this.AppStateHandler.bind(this);
        this.addPost= this.addPost.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.favHandler = this.favHandler.bind(this);
        this.likeHandler = this.likeHandler.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        this.termHandler= this.termHandler.bind(this);
    }
    search(term, type, page=1){
        this.setState({loading:true});
        fetch(`https://www.omdbapi.com/?apikey=a9266e7d&s=${term}&type=${type}&page=${page}`)
            .then(response=> response.json())
            .then((data) => this.setState({
                movies:data.Search,
                total:data.totalResults,
                loading:false
            }))
            .then(()=>{
                const allPages = Math.ceil(this.state.total/10);
                const newArr = [];
                for(let i=1;i<=allPages;i++){
                    newArr.push(i);
                    this.setState({pages:newArr})
                }
            });
    }
    AppStateHandler(search,type){
        this.setState({searchTerm:search,type})
    }
    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=a9266e7d&s=arrow`)
            .then(response=> response.json())
            .then((data) => this.setState({
                movies:data.Search,
                total:data.totalResults,
                loading:false
            }))
            .then(data=>{
                const allPages = Math.ceil(this.state.total/10);
                const newArr = [];
                for(let i=1;i<=allPages;i++){
                    newArr.push(i);
                    this.setState({pages:newArr})
                }
            })
    }
    signHandler(e){
        console.log(e.target)
        document.body.style.cssText = `
            overflow:hidden;
        `
        e.target.dataset.type === 'sign-in-up' && this.setState({auth:{type:'login',visible:true}})
    }
    closeHandler (e){
        document.querySelector('.authmain').style.cssText =`
            opacity:0;
            transition:all .5s ease-in;
        `
            document.body.style.cssText = `
            overflow:auto;
        `
            this.setState({auth:{visible:false}});
    }
    termHandler(term){
        this.setState({term})
    }
    searchHandler(term){
        if(term===''){
            return this.state.posts;
        }
        else{
              return this.state.posts.filter((post)=> {
                  return post.text.toLowerCase().indexOf(term.toLowerCase()) > -1
              } )
        }
    }
    addPost(message){
            this.setState(({posts})=>{
                const newPost = {
                    id:this.state.posts.length+1,
                    name:"Ozodbek Bakhtiyorov",
                    text:message,
                    likes:0,
                    date: `${new Date().getHours()}:${new Date().getMinutes()}`
                }
                return{
                    posts:[...posts,newPost]
                }
         })
    }
    likeHandler(id){
        this.setState(({posts})=>{
            const index = posts.findIndex(el=>el.id === id);
            const updateItem = {
                ...posts[index],
                likes:posts[index].likes+1
            }
            return{
                posts:[...posts.slice(0, index),updateItem,...posts.slice(index+1)]
            }
        })
    }
    favHandler(id){
        this.setState(({posts})=>{
            const index = posts.findIndex(el=>el.id===id);
            const updateItem = {
                ...posts[index],
                favourite:!posts[index].favourite
            }
            return{
                posts:[...posts.slice(0,index), updateItem, ...posts.slice(index+1)]
            }
        })
    }
    deleteHandler(id){
        console.log(id)
        this.setState(({posts})=>{
            const index = posts.findIndex(el=>el.id===id);
            return{
                posts:[...posts.slice(0,index),...posts.slice(index+1)]
            }
        })
    }
    render () {
        const visiblePosts = this.searchHandler(this.state.term)
        const {movies,total,pages, loading, auth} = this.state
        return (
            <>
                {
                    auth.visible && <Auth
                        type={auth.type}
                        close={this.closeHandler}
                    />
                }
                {loading && <Loader/>}
                <AppContent className={'app'}>
                    <Header signHandler={this.signHandler}/>
                    <Main
                        search={this.search}
                        appState={this.AppStateHandler}
                        addpost={this.addPost}
                        likeHandler={this.likeHandler}
                        deleteHandler={this.deleteHandler}
                        favHandler={this.favHandler}
                        searchHandler={this.termHandler}
                        visiblePosts ={visiblePosts}
                        {...this.state}
                    />
                    <Footer signHandler={this.signHandler}/>
                </AppContent>
            </>
        )
    }
}
const AppContent = styled.div`
    width: 80%;
    margin: 0 auto;
`
export default App;
