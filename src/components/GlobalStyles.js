import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
*{padding:0;
margin:0;
box-sizing:border-box;
}
html{
    @media(max-width:1100px)
    {
        font-size:smaller;
    }
}
body{
    background-color:#1b1b1b;
}

`;

export default GlobalStyles;
