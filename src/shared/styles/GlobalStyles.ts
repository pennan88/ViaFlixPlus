import { createGlobalStyle } from "styled-components";
import { fadeIn } from "./animations/fadein";

export const GlobalStyle = createGlobalStyle`
html,body{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

div {
    animation: ${fadeIn} 0.1ms ease-in infinite;
}
`;
