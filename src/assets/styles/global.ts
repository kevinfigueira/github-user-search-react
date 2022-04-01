import styled, { createGlobalStyle } from 'styled-components';

import * as React from 'react'



// FONTS

export const GlobalStyles = createGlobalStyle`
  // Space Mono
@font-face {
    font-family: 'Space Mono';
    src: url('../Fonts/SpaceMono-Bold.ttf');
    font-weight: 700;
    font-style: normal;
};
@font-face {
    font-family: 'Space Mono';
    src: url('../Fonts/SpaceMono-Regular.ttf');
    font-weight: 400;
    font-style: normal;
};

// Montserrat
@font-face {
    src: url('../Fonts/Montserrat-Medium.ttf');
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
}
@font-face {
    src: url('../Fonts/Montserrat-Bold.ttf');
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
}

// VARIABLES
:root {
    --white: #FFFFFF;
    --bg-1: #FEFEFE;
    --bg-2: #F5F8FF;
    --txt-1: #2F323C;
    --txt-2: #8D949D;
    --txt-3: #4C64A2;
    --txt-4: #A1B0C7;
    --txt-5: #266CFF;
}

// SMOOTH RESET
html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}
*,
*::before,
*::after {
    box-sizing: border-box;
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    margin: 0;
    padding: 0;
}
body {
    font-family: 'Space Mono';
    font-weight: 400;
    background-color: ${c => c.theme.colors.bg_2};
}

`;

export const ContainerMain = styled.div`
    padding: 2.4rem;
    max-width: 768px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`;
