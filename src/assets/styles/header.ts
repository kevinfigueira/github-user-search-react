import styled from "styled-components";

// ==== GitHeader === 
export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
`;

export const HeaderLogoLink = styled.a`
    font-size: 3rem;
    cursor: pointer;
    transition-property: color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    text-decoration: none;
    color: ${ c => c.theme.colors.txt_1};
    &:hover{
        color: ${c => c.theme.colors.txt_3};
    }
    @media only screen and (min-width: 667) {
        font-size: 3rem;
    }
`;

export const HeaderButton = styled.button`
    text-transform: uppercase;
    letter-spacing: 0.3em;
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition-property: color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    background: none;
    border: none;
    cursor: pointer;
    color: ${ c => c.theme.colors.txt_1};

    &:hover{
        color: ${c => c.theme.colors.txt_3};
    }

    svg {
        width: 30px;
        height: auto;
    }
`;