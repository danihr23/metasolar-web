import styled, { createGlobalStyle } from 'styled-components/macro';


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;500&display=swap');
  html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    height: 100%;
    /* height: -moz-available;
    height: -webkit-fill-available;
    height: fill-available; */
  }
  body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;  

    height: 100%;

    //Disable touch zooming and scrolling. Important to reenable on buttons, menus, etc.
    touch-action: none;

    margin: 0;
    padding: 0;

    
  
  
  }
 
`;

export const ContentWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  //Disable scrolling on supported devices
  overflow: clip;
  overscroll-behavior-x: none;

`;

export default GlobalStyle;
