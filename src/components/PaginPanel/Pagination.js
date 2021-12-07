import React, {Component} from 'react';
import styled from "styled-components";
class Pagination extends Component {
    constructor(props) {
        super(props);
        this.pageHandler = this.pageHandler.bind(this);
    }
    pageHandler(e){
        const {search,searchTerm,type} = this.props;
        console.log(search,searchTerm,type,e.target.dataset.type);
        search(searchTerm,type,e.target.dataset.type)
    }
    render() {
        const {pages} = this.props;
        return (
            <PaginationContent>
                <ul className="pagination">
                    <li className="disabled "><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                    {
                       pages.length && pages.map((page,index)=>(
                            <li
                                key={index}
                                className="waves-effect pagin"
                                style={{margin:'0px 5px'}}
                            >
                                <a
                                    href="#!"
                                    data-type={page}
                                    onClick={this.pageHandler}
                                >
                                    {page}
                                </a>
                            </li>
                        ))
                    }
                    <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                </ul>
            </PaginationContent>
        );
    }
}
const PaginationContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .pagination{
    max-width: 100%;
    overflow-y: hidden;
  }
 
`;

export default Pagination;