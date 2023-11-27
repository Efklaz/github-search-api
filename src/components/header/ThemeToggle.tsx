import styled from 'styled-components';
import DarkIcon from '../../icons/icon-moon.svg'
import LightIcon from '../../icons/icon-sun.svg'
import {useTypedDispatch, useTypedSelector} from "../../store";
import {setTheme} from "../../store/rootSlice";

const Wrapper = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    height: 50px;
` 
const ThemeText = styled.span<{currentTheme: string}>`
    font-family: ${props => props.theme.fonts.h1.family};
    font-size: '13px';
    font-weight: 700;
    color: ${props => props.currentTheme === "light" ? props.theme.colors.light.secondary : "#FFFFFF"};
    letter-spacing: 2.5px;

`

function ThemeToggle() {
    const currentTheme = useTypedSelector(state => state.themeSlice.currentTheme)
    const dispatch = useTypedDispatch()

    return(
        <Wrapper onClick={() => dispatch(setTheme((currentTheme === "light" ? "dark" : "light")))}>
                <ThemeText currentTheme={currentTheme}>{currentTheme === "light" ? "DARK" : "LIGHT"}</ThemeText>
                <img 
                    src={currentTheme === "light" ? DarkIcon : LightIcon}
                    height="20px"
                    width="20px"
                    alt="mode-icon"
                />
        </Wrapper>
    );
}


export default ThemeToggle;