import styled from 'styled-components';
import ThemeToggle from './ThemeToggle'
import {useTypedSelector} from "../../store";

const Logo = styled.h1<{currentTheme: string}>`
    cursor: default;
    user-select: none;
    font-family: ${props => props.theme.fonts.h1.family};
    font-size: ${props => props.theme.fonts.h1.size};
    line-height: ${props => props.theme.fonts.h1.lineHeight};
    color: ${props => props.currentTheme === "light" ? "#222731" : "#FFFFFF"};
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
`

function Header(){
    const currentTheme = useTypedSelector(state => state.themeSlice.currentTheme)
    return(
        <Wrapper>
            <Logo currentTheme={currentTheme}>Find User</Logo>
            <ThemeToggle />
        </Wrapper>
        );
}


export default Header;