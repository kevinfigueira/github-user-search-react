
//STYLES
import { 
    NotFoundContainer, 
    NotFoundPic,
    NotFoundText, 
    NotFoundWrapper 
} from '../assets/styles/not';

//IMAGE
import octocat from '../assets/images/octocat-not-found.png';

const UserNotFounder = () => {
    return (
        <NotFoundContainer>
            <NotFoundPic src={octocat} alt="Github mascot dressed like wally"/>
            <NotFoundWrapper>
                <NotFoundText>
                    <span>Oooh no!</span>
                    <span>This user does not exist...</span>
                </NotFoundText>
            </NotFoundWrapper>
        </NotFoundContainer>
    )
}

export default UserNotFounder;