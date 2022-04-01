import styled from "styled-components";

export const SearchContainer = styled.header`
    border-radius: 1.5rem;
    padding: 1rem;
    background-color: ${c => c.theme.colors.bg_1};
    color: var(--txt-5);
`;

export const SearcForm = styled.div`
    display: flex;
    font-size: 1.4rem;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    @media only screen and (min-width: 667px) {
    font-size: 1.6rem;
    svg {
      margin: 0 0.8rem 0 1.4rem;
    }
  }
`;

export const SearchInput = styled.input.attrs({ type: 'text' })`
  background: transparent;
  min-width: 0;
  border: transparent;
  outline: none;
  width: 100%;
  color: ${ c => c.theme.colors.txt_2};

  ::placeholder{
    color: ${ c => c.theme.colors.txt_2};
  }
`;

export const Searchbutton = styled.button`
    border-radius: 1rem;
    padding: 1em 1.2em;
    margin-left: auto;
    color: var(--white);
    background-color: var(--txt-5);
    border: transparent;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
`;