import { useContext } from 'react'

//STYLES
import { HeaderContainer, HeaderLogoLink, HeaderButton } from '../assets/styles/header'
import { ThemeContext } from 'styled-components';

// ICONS
import { MdWbSunny, MdNightlightRound } from 'react-icons/md';

//TYPES
type Props = {
    toggleTheme(): void;
}


export const GitHeader = ({ toggleTheme }: Props) => {
    const { title } = useContext(ThemeContext)

    return(
        <HeaderContainer>
            <HeaderLogoLink href='#'>devfinder</HeaderLogoLink>
            <HeaderButton onClick={() => toggleTheme()}>
                {title === 'light' ? 'DARK' : 'LIGHT'}
                {title === 'light' ? <MdNightlightRound/> : <MdWbSunny/>}
            </HeaderButton>
        </HeaderContainer>
    )
}