//UTILS
import { api } from '../utils/api';

//STYLES
import { 
    UserContainer, 
    UserBoardHeader, 
    UserImg, 
    UserInfo, 
    UserInfoWrapper, 
    Box, 
    UserInfoTitle, 
    UserInfoSubtitle, 
    UserInfoSubLink,
    UserInfoDate,
    UserInfoBio,
    UserGit,
    BoxGit,
    UserGitTitle,
    UserGitNumber,
    UserPublic,
    UserPublicList,
    UserPublicItem,
    UserPublicLink,
    UserPublicInfo} from '../assets/styles/board';

// ICONS
import { MdLocationOn, MdLink, MdOutlineApartment } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa';




const GitUserBoard = ( { userProfile }: any) => {

    const {
        avatar_url,
        name,
        login,
        created_at,
        bio,
        public_repos,
        followers,
        following,
        location,
        blog,
        company,
        twitter_username,
    } = userProfile;
    
    return (
        <>
            <UserContainer >
                <UserBoardHeader>
                    <UserImg  src={avatar_url} alt="Github user profile" />
                </UserBoardHeader>
                {/* ==== UserInfo ==== */}
                <UserInfo>
                    <UserInfoWrapper>
                        <Box>
                            <UserInfoTitle>{name}</UserInfoTitle>
                            <UserInfoSubtitle>
                                <UserInfoSubLink href={`https://github.com/${login}`} target="_blank">@{login}</UserInfoSubLink>
                            </UserInfoSubtitle>
                        </Box>
                        <UserInfoDate>{`Joined ${api.getDate(created_at)}`}</UserInfoDate>
                    </UserInfoWrapper>
                        <UserInfoBio>{bio}</UserInfoBio>
                </UserInfo>
                {/* ==== UserGit ==== */}
                <UserGit>
                    <BoxGit>
                        <UserGitTitle>Repos</UserGitTitle>
                        <UserGitNumber>{public_repos}</UserGitNumber>
                    </BoxGit>
                    <BoxGit>
                        <UserGitTitle>Followers</UserGitTitle>
                        <UserGitNumber>{followers}</UserGitNumber>
                    </BoxGit>
                    <BoxGit>
                        <UserGitTitle>Following</UserGitTitle>
                        <UserGitNumber>{following}</UserGitNumber>
                    </BoxGit>
                </UserGit>
                {/* ==== UserPublic ==== */}
                <UserPublic>
                    <UserPublicList>
                        <UserPublicItem><MdLocationOn/> <UserPublicInfo>{location ? location : 'Not avaible'}</UserPublicInfo></UserPublicItem>
                        <UserPublicItem>
                            <UserPublicLink href={blog} target="_blank"><MdLink/> 
                                <UserPublicInfo>{blog ? blog : 'Not avaible'}</UserPublicInfo>
                            </UserPublicLink>
                        </UserPublicItem>
                        <UserPublicItem>
                            <UserPublicLink 
                                href={twitter_username ? `https://twitter.com/${twitter_username}` : "#"} 
                                target="_blank"> <FaTwitter/> <UserPublicInfo>{twitter_username ? twitter_username : 'Not avaible'}</UserPublicInfo>
                            </UserPublicLink>
                        </UserPublicItem>
                        <UserPublicItem><MdOutlineApartment/> <UserPublicInfo>{company ? company : 'Not avaible'}</UserPublicInfo></UserPublicItem>
                    </UserPublicList>
                </UserPublic>
            </UserContainer>
        </>
    )
}

export default GitUserBoard;