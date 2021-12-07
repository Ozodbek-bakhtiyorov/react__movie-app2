import React, {Component} from 'react';
import styled from "styled-components";
import img from '../../images/user.jpg'
class PostItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {id,name,text,date,likes,favourite, likeHandler, deleteHandler,favHandler} =this.props;
        const fav = favourite && 'fav'
        return (
            <PostItemContent >
                <div className={'item-header'}>
                    <div className={'img'}>
                        <img src={img} alt="img"/>
                    </div>
                    <p className={'name'}>{name}</p>
                    <div className={'status-info'}>
                        <p>{date}</p>
                        <p>{likes} Likes</p>
                    </div>
                </div>
                <div className={'text'}>
                    <p>{text}</p>
                </div>
                <div className="btn-group">
                    <button data-post='button' onClick={e=>likeHandler(id)}><i className={'material-icons'}>thumb_up</i></button>
                    <button data-post='delete' onClick={e=>deleteHandler(id)}><i className={'material-icons'}>delete_forever</i></button>
                    <button data-post='favourite' onClick={e=>favHandler(id)}><i className={`material-icons ${fav}`}>favorite</i></button>
                </div>
            </PostItemContent>
        );
    }
}
const PostItemContent = styled.li`
  box-shadow: 0px 0px 10px black;
  display: flex;
  margin-bottom: 20px;
  align-items: flex-start;
  flex-direction: column;
  max-width: 400px;
  min-width: 300px;
  padding: 15px 20px;
  border-radius: 4px;
  border: 2px solid rgba(86, 33, 33, 0.8);
  position: relative;
  .item-header{
    display: flex;
    flex-direction: row;
    .name{
      margin-left: 20px;
      max-width:120px;
      color: white;
    }
    .status-info{
      position:absolute;
      top: 0;
      padding-right:20px;
      color: gray;
      right: 0;
    }
  }
  .img {
    width: 60px;
    border-radius: 50%;
    overflow: hidden;

    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
    }
  }

  .text {
    p {
      font-size: 20px;
      line-height: 22px;
      color: white;
    }
  }

  .btn-group {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    button {
      margin-right: 20px;
      border: 1px solid rgba(86, 33, 33, 0.8);
      background: transparent;
      cursor: pointer;
      transition: all .4s;
      &:hover {
        border: 1px solid white;
        background: #654343;
        box-shadow: 0 0 5px black inset;
      }
      .material-icons {
        font-size: 25px;
        color: #443434;
        transition: all .4s;
      }

     &:hover .material-icons{
        color: white;
      }
    }
  }
`
export default PostItem;