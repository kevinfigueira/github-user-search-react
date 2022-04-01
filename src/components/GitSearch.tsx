import React, { useEffect, useState } from "react"

// UTILS
import { api } from "../utils/api";
import { validateUser } from '../utils/_aux';

//TYPES
import { userType } from '../types/userType';

// ICONS
import { RiSearchLine } from 'react-icons/ri';

//STYLES
import { SearcForm, SearchInput, Searchbutton, SearchContainer } from '../assets/styles/search'



//COMPONENTS
import GitUserBoard from "./GtiUserBoard";
import GitUserRepos from "./GitUserRepos";
import Loading from "./Loading";
import UserNotFounder from "./UserNotFounder";


const GitSearch = () => {
    const [data, setData] = useState<userType>();
    const [username, setUsername] = useState<string>("");
    const [userErr, setUserErr] = useState<boolean>(false)
    
    const getUserProfile = async (user: string) => {
        let response = await api.getUserProfile(user)
        setData(response);
    }
    
    const handleButton = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valid = validateUser.test(e.target.value);
        if(!valid){
            setUsername( e.target.value );
            setUserErr(true)
        } else {
            setUsername('')
            setUserErr(false)
        }
    }

    return (
        <>
            <SearchContainer>
                <SearcForm>
                    <RiSearchLine size={30} />
                    <SearchInput 
                        onChange={handleButton} 
                        placeholder="Github username"
                    />
                    <Searchbutton 
                        onClick={() => getUserProfile(username)}   
                    >Search</Searchbutton>
                </SearcForm>
            </SearchContainer>

            {data &&
            <GitUserBoard 
            avatar_url={data?.avatar_url}
            name={data?.name}
            login={data?.login}
            created_at={data?.created_at}
            bio={data?.bio}
            public_repos={data?.public_repos}
            followers={data?.followers}
            following={data?.following}
            location={data?.location}
            blog={data?.blog}
            company={data?.company}
            twitter_username={data?.twitter_username}
            />}            
            {data?.public_repos ? <GitUserRepos name={username}/> : null }
        </>
    )
}

export default GitSearch;