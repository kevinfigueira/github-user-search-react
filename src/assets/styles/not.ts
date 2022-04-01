import styled from "styled-components";

export const NotFoundContainer = styled.section`
  display: flex;
  font-family: 'Montserrat';
  flex-wrap: wrap;
  margin-top: 4.8rem;
  gap: 3.6rem;
  @media screen and (min-height: 800px) {
    margin-top: 10rem;
  }
`;

export const NotFoundPic = styled.img`
  width: 80%;
  max-width: 280px;
  order: 2;
  display: block;
  margin: 0 auto;
`;

export const NotFoundWrapper = styled.div`
  order: 1;
  margin: 0 auto;
  align-self: center;
  color: ${ c => c.theme.colors.txt_3};
`;

export const NotFoundText = styled.p`
  span {
    display: block;
    &:first-child {
      font-size: 4rem;
      font-weight: 700;
      @media screen and (min-width: 667px) {
        font-size: 5.2rem;
      }
    }
    &:last-child {
      font-size: 1.8rem;
      font-weight: 500;
      @media screen and (min-width: 667px) {
        font-size: 3rem;
      }
    }
  }
`;
