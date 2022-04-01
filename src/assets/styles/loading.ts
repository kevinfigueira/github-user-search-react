import styled from "styled-components";

export const LoadingText = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  color: ${ c => c.theme.colors.txt_3};
  margin-top: 4.2rem;
  @media screen and (min-width: 667px) {
    font-size: 2.4rem;
  }
`;

export const LoadingDot = styled.span`
  letter-spacing: 0;
  opacity: 0;
  animation-name: showDot;
  animation-iteration-count: infinite;
  animation-duration: 0.75s;
  &:nth-child(2) {
    animation-delay: 0.25s;
  }
  &:last-child {
    animation-delay: 0.5s;
  }
  @keyframes showDot {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;