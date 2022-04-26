import { useEffect, useState } from 'react'

//UTILS
import { api } from '../utils/api';

// ICONS
import { FaDivide, FaRegStar } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';
import { FaRegHandPointer } from 'react-icons/fa';

//TYPES
import { reposType } from '../types/reposType'

//STYLES
import { 
    ReposContainer, 
    ReposButton, 
    ReposCard,
    ReposCardsList,
    ReposWrapper,
    ReposExtra,
    ReposLink,
    ReposText,
    ReposTitle
} from '../assets/styles/repos';


const GitUserRepos = ( { userRepos }: any) => {
    const [repos, setRepos] = useState(false);
 
    const showRepos = () => {
        if(userRepos){
            setRepos(!repos)
        }
    }
    console.log((userRepos))
    return (
        <>  
            <ReposContainer>
                <div>

                    {!repos &&
                        <ReposButton onClick={showRepos}>Show Repos</ReposButton>
                    }

                    {repos &&
                    <ReposCardsList>
                        {userRepos.map((repo: reposType) => {
                            const {
                                id, 
                                html_url, 
                                name, 
                                description, 
                                stargazers_count, 
                                updated_at
                            } = repo;
                            return (
                                <ReposCard key={`repo-${id}`}>
                                    <ReposTitle>
                                        <ReposLink href={html_url} target="_blank">
                                            {name}
                                        </ReposLink>
                                        <FaRegHandPointer/>
                                    </ReposTitle>
                                    <ReposText>
                                        {description ? description : 'No description'}
                                    </ReposText>
                                    <ReposWrapper>
                                        <ReposExtra>
                                            <FaRegStar />
                                            {stargazers_count}
                                        </ReposExtra>
                                        <GoPrimitiveDot size={10}/>
                                        <ReposExtra>{`update at ${api.getDate(updated_at)}`}</ReposExtra>
                                    </ReposWrapper>
                                </ReposCard>
                            )
                        })}
                    </ReposCardsList>}
                </div>
            </ReposContainer>
        </>
    )
}

export default GitUserRepos;