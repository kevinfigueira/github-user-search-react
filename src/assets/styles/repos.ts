import styled from "styled-components";

export const ReposContainer = styled.section`
  > div {
    margin-top: 3.6rem;
  }
  @media screen and (min-width: 768px) {
    > div {
      margin-top: 4.2rem;
    }
  }
`;

export const ReposButton = styled.button`
  border-radius: 1rem;
  border: 2px solid ${ c => c.theme.colors.txt_5};
  padding: 0.8em 1em;
  background: transparent;
  color: ${ c => c.theme.colors.txt_5};
  font-weight: 700;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  font-size: 1.4rem;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  &:hover{
    color: white;
    background: ${ c => c.theme.colors.bg_3};
  }

  @media screen and (min-width: 667px) {
    font-size: 1.6rem;
  }
`;

export const ReposCardsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
    gap: 3rem;
  }
`;

export const ReposCard = styled.li`
  list-style: none;
  border-radius: 1.5rem;
  background: ${ c => c.theme.colors.bg_1};
  color: ${ c => c.theme.colors.txt_2 };
  padding: 2rem;
  box-shadow: ${c => `0px 20px 25px -5px rgba(${ c.theme.colors.shadow}, 0.1),
                0 8px 10px -6px rgba(${c.theme.colors.shadow}, 0.1)`};;
  font-size: 1.4rem;
  line-height: 1.6;

  @media screen and (min-width: 667px) {
    font-size: 1.6rem;
  }
`;

export const ReposTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: ${ c => c.theme.colors.txt_1};
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  &:hover {
    color: ${ c => c.theme.colors.txt_3 };
    text-decoration: underline;
  }

  &:hover a {
  }
  svg {
    width: 18px;
    height: auto;
    transform: rotate(-53deg);
  }
  @media screen and (min-width: 667px) {
    font-size: 2rem;
  }
`;

export const ReposLink = styled.a`
  color: inherit;
  width: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  max-width: 200px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  @media screen and (min-width: 667px) {
    max-width: 550px;
  }
`;

export const ReposText = styled.p`
  margin-bottom: 1.2rem;
  max-width: 550px;
`;

export const ReposWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const ReposExtra = styled.span`
  svg {
    margin-right: 0.5rem;
  }
`;