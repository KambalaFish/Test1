import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
  
  html,
  body {
    scroll-behavior: smooth;
    padding: 0;
    margin: 0;
    //font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    //Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    //color: ${({theme}) => theme.colors.body};
    //background-color: ${({theme}) => theme.backgroundColors.body};
  }
  
  a {
    color: inherit;
    text-decoration: none;
  } 
  //a:hover {
  //  color: #38B662;
  //}

  * {
    box-sizing: border-box;
  }

  .active {
    color: ${props => props.theme.palette.sliderMenu.active.color} !important;
    background: ${props => props.theme.palette.sliderMenu.active.backgroundColor};
  }

  //[data-scroll] {
  //  transition: all 1s;
  //}
  //[data-scroll="in"] {
  //  opacity: 1;
  //}
  //[data-scroll="out"] {
  //  opacity: 0;
  //}
  
`

export default Global;
