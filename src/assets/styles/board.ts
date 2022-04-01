import styled from "styled-components";

export const UserContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3.5fr;
    grid-template-areas: 
        "img info"
        ". git"
        ". public"
    ;
    gap: 2.4rem;
    margin-top: 2.4rem;
    flex-wrap: wrap;
    background-color: ${c => c.theme.colors.bg_1};
    box-shadow: ${c => `0px 20px 25px -5px rgba(${ c.theme.colors.shadow}, 0.1),
                0 8px 10px -6px rgba(${c.theme.colors.shadow}, 0.1)`};
    border-radius: 1.5rem;
    padding: 3.6rem;

    @media screen and (max-width: 667px) {
        grid-template-areas: 
        "img info"
        "git git"
        "public public"
    ;   
    justify-content: center;
    align-items: flex-end;
    }
    @media screen and (max-width: 410px) {
        align-items: center;
        grid-template-areas: 
        "img img"
        "info info"
        "git git"
        "public public"
    ;   
    }

`;

export const UserBoardHeader = styled.header`
    gap: 2.4rem;
    grid-area: img;
    @media screen and (max-width: 667px) {
        display: flex;
        justify-content: center;
    }
`;

export const UserImg = styled.img`
    height: auto;
    border-radius: 50%;
    max-width: 150px;
    min-width: 70px;
    align-self: center;
`;

// === INFO ===

export const UserInfo = styled.section`
    grid-area: info;
    flex-wrap: wrap;
`;

export const UserInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 24px;
`;

export const Box = styled.div``;

export const UserInfoTitle = styled.h1`
    font-size: 2.4rem;
    font-weight: 700;
    color: ${ c => c.theme.colors.txt_1};
    @media screen and (max-width: 667px){
        font-size: 1.8rem;
    }
`;

export const UserInfoSubtitle = styled.h2`
    font-size: 1.8rem;

    @media screen and (max-width: 667px) {
    font-size: 1.4rem;
  }
`;

export const UserInfoSubLink = styled.a`
    text-decoration: none;
    color: var(--txt-5);

    :hover{
        text-decoration: underline;
    }
`;

export const UserInfoDate = styled.span`
    font-size: 1.7rem;
    color: #8D949D;
    @media screen and (max-width: 667px) {
    font-size: 1.4rem;
  }
`;

export const UserInfoBio = styled.p`
    font-size: 1.7rem;
    color: #8D949D;
    @media screen and (max-width: 667px) {
    font-size: 1.4rem;
  }
`;

// ==== Git ====
export const UserGit = styled.section`
    grid-area: git;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: ${ c => c.theme.colors.bg_2};
    border-radius: 1.5rem;
    padding: 2.2rem;
`;

export const BoxGit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
`;

export const UserGitTitle = styled.h3`
    color:  ${ c => c.theme.colors.txt_4};
    font-size: 1.6rem;
    @media screen and (max-width: 667px) {
    font-size: 1.4rem;
  }
`;

export const UserGitNumber = styled.span`
    font-size: 2rem;
    color: ${ c => c.theme.colors.txt_1};
    font-weight: 700;
    @media screen and (max-width: 667px) {
    font-size: 1.4rem;
  }
`;

// ==== Public ====
export const UserPublic = styled.footer`
    grid-area: public;
`;

export const UserPublicList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;   
`;

export const UserPublicItem = styled.li`
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: 100%;
    color: rgb(161, 176, 199);
`;

export const UserPublicInfo = styled.span`
    width: auto;
    max-width: 180px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (max-width: 667px) {
    font-size: 1.4rem;
  }   
`;

export const UserPublicLink = styled.a`
    color: rgb(161, 176, 199);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
`;