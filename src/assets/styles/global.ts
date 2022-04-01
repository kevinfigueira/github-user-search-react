import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

//FONTS
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');



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
    font-family: 'Space Mono', monospace, 'Montserrat', sans-seri;
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
