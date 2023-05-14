// import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&family=Wix+Madefor+Display:wght@400;500;600;700&display=swap');
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html{
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-family: 'Wix Madefor Display', sans-serif;
}

ul,li{
    list-style: none;
   } 

   a{
    text-decoration: none;
   }
  
`;
