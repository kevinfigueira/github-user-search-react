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
} from '../assets/styles/repos'

const GitUserRepos = ( { name }: any) => {
    const [repos, setRepos] = useState([])

    const getAllRepos = async () =>{
        let response = await api.getUserRepos(name)
        setRepos(response)
    }

    return (
        <>  
            <ReposContainer>
                <div>
                    {!repos.length &&
                        <ReposButton onClick={getAllRepos}>Show Repos</ReposButton>
                    }
                    
                    <ReposCardsList>
                        {repos.map((repo: reposType) => {
                            const {
                                id, html_url, 
                                name, description, 
                                stargazers_count, updated_at
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
                    </ReposCardsList>
                </div>
            </ReposContainer>
        </>
    )
}

export default GitUserRepos;