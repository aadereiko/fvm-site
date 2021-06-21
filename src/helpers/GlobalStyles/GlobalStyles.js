import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    body {
        font: 400 15px/1.2 'Montserrat', sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        background-color: #000000;
        height: 100%;
    }

    a {
        text-decoration:none;
        color: #ffffff;
    }

    .ant-affix {
        transition: all 0.3s ease-in-out;
    }

    .swiper-wrapper {
        display: flex;
        align-items: center;
    }
`;