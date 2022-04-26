import React, { useEffect, useState } from "react";

// ICONS
import { RiSearchLine } from 'react-icons/ri';

//STYLES
import { SearcForm, 
    SearchInput, 
    Searchbutton, 
    SearchContainer } from '../assets/styles/search'


type Props = {
    onSubmit: (user: string) => any;
}


const GitSearch = ({ onSubmit }: Props) => {
    const [inputUsername, setInputUsername] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    
    const handleButton = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputUsername( e.target.value );
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUsername(inputUsername)
        onSubmit(inputUsername)
    }


    return (
        <>
            <SearchContainer>
                <SearcForm onSubmit={handleSubmit}>
                    <RiSearchLine size={30} />
                    <SearchInput 
                        onChange={handleButton} 
                        placeholder="Github username"
                    />
                    <Searchbutton>Search</Searchbutton>
                </SearcForm>
            </SearchContainer>
        </>
    )
}

export default GitSearch;