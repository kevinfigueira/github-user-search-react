import { Dispatch, useEffect, useState } from "react";

//STYLES
import styled, { ThemeContext } from "styled-components";
const Main = styled.main``;

//COMPONENTS
import GitSearch from "./GitSearch";
import GitUserBoard from "./GtiUserBoard";
import GitUserRepos from "./GitUserRepos";
import Loading from "./Loading";
import UserNotFounder from "./UserNotFounder";

//UTILS
import { api } from "../utils/api";

//TYPE
import { userType } from '../types/userType';


const GitMain = () =>{
    const [profile, setProfile] = useState<boolean>(false)
    const [userErr, setUserErr] = useState<boolean>(false);
    const [data, setData] = useState<userType>()
    const [repos, setRepos] = useState([])

    const handleSubmit = async (user: string) => {
        getUser(user);
    }

    const getUser = async (user: string) => {
        const response = await api.getUserProfile(user)
        const repos = await api.getUserRepos(user)
        if(response){
            setData(response)
            setRepos(repos)
            setProfile(true)
            setUserErr(false)
        } else {
            setProfile(false)
            setUserErr(true)
        }
    }

    return(
        <Main>
            <GitSearch onSubmit={handleSubmit}/>
            {profile && <GitUserBoard userProfile={data}/>}
            {profile && (
                repos.length !== 0 ? <GitUserRepos userRepos={repos}/> : null
            )}
            {userErr && <UserNotFounder/>}   
        </Main>
    )
}

export default GitMain;