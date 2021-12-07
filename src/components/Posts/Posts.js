import React, {Component} from 'react';
import styled from "styled-components";
import PostItem from "../PostItem";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
        this.messageHandler = this.messageHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        this.onKey = this.onKey.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.searchInput = this.searchInput.bind(this);
    }
    messageHandler(e){
        this.setState({[e.target.name]:e.target.value}, );
    }
    clearInput(){
        this.setState({post:''})
    }
    onSubmit(e){
        e.preventDefault();
        if(this.state.post) {
            this.props.addPost(this.state.post);
            this.clearInput();
        }
        else{
            alert('This input should not be empty !!! ')
        }
    }
    onKey(e){
        if(e.key === 'Enter'){
            if(this.state.post) {
                this.props.addPost(this.state.post);
                this.setState({post:''})
            }
            else{
                alert('This input should not be empty !!! ')
            }
        }
    }
    searchInput(e){
        this.setState({[e.target.name]:e.target.value}, ()=>{
            this.props.search(this.state.search);
            console.log(this.state.search)
        })


    }

    render() {
        const {visiblePosts,
            favHandler,
            deleteHandler,
            likeHandler
        } = this.props;
        return (
            <PostsContent>
                <h1>All Posts <span>All Posts</span></h1>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    id="icon_prefix"
                                    type="text"
                                    name={'search'}
                                    className="validate white-text "
                                    onChange={this.searchInput}
                                />
                                    <label htmlFor="icon_prefix">Search...</label>
                            </div>
                        </div>
                    </form>
                </div>
                <ul>
                    {
                       visiblePosts.length ? visiblePosts.map(post=>(
                                  <PostItem
                                     {...post}
                                     favHandler={favHandler}
                                     likeHandler={likeHandler}
                                     deleteHandler={deleteHandler}
                                 />
                       )):<h1>OOPS No Posts</h1>}
                </ul>
                <form onSubmit={this.onSubmit}>
                    <div className="form-content row">
                            <div className="input-field col s7">
                                <textarea
                                    id="message"
                                    className="materialize-textarea"
                                    name='post'
                                    value={this.state.post}
                                    onChange={this.messageHandler}
                                    onKeyDown={this.onKey}
                                />
                                <label htmlFor="message">Message</label>
                            </div>
                        <div className="input-field col s3 ">
                            <button
                                type='submit'
                                className="waves-effect waves-green btn"
                            >
                                send
                                <i className="material-icons right">send</i>
                                </button>
                        </div>
                    </div>
                </form>
            </PostsContent>
        );
    }
}
const PostsContent = styled.div`
  width: 100%;
  h1 {
    font-size: 90px;
    line-height: 150px;
    font-weight: bold;
    color: #e7b2b2;
    padding: 40px 0;
    position: relative;
    text-align: left;
    text-justify: auto;

    span {
      position: absolute;
      font-size: 140px;
      left: 0;
      top: 0;
      font-weight: 900;
      line-height: 150px;
      color: rgba(199, 164, 164, 0.4);
    }
  }
  ul{
    width: 100%;
    max-height: 450px;
    overflow-y: auto;
  }
  .form-content{
    .input-filed{
      padding: 0!important;
    }
  }
  form{
   max-width: 700px;
    min-width: 300px;
    button{
      height: 60px;
      font-size: 20px;
    }
  textarea{
      color: white;
      font-size: 20px;
    }
  }
`

export default Posts;