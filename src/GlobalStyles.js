import {createGlobalStyle} from "styled-components";
export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    list-style: none;
  }
  body{
    font-family: "Roboto", sans-serif;
    background: #161D25;;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background:green;
  }
  .fav{
    color: white!important;
  }
`