import SearchButton from "./SearchButton";
import SearchIcon from '../../icons/icon-search.svg';
import styled from 'styled-components';
import { useState } from "react";
import {useTypedSelector} from "../../store";


const Input = styled.input<{currentTheme: string}>`
    &::placeholder{
        opacity: 1;
        color: ${props => props.currentTheme === "light" ? "#4B6A9B" : "#FFFFFF"};
    }
    &:focus{
        outline: none;
    }
    font-family: ${props => props.theme.fonts.h1.family};
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.currentTheme === "light" ? "#4B6A9B" : "#FFFFFF"};
    background: ${props => props.currentTheme === "light" ? "#FFFFFF" : props.theme.colors.dark.quaternary};
    line-height: 25px;
    width: 100%;
    height: 69px;
    padding: 0 0 0 80px;
    border: none;
    border-radius: 15px;
    box-shadow: ${props => props.currentTheme === "light" ? "0 4px 6px -1px rgb(70 96 187 / 0.1), 0 2px 4px -2px rgb(70 96 187 / 0.1)" : ""};
    
    @media(max-width: 375px){
        font-size: 13px;
        padding: 0 0 0 51px; 
        height: 60px;
    }
     
    `
const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 19px 0 0 0;
`
const Icon = styled.img`
    position: absolute;
    left: 32px;
    height: 24px;
    width: 25px;
    @media(max-width: 375px){
        left: 16px;
    }
`
const Error = styled.span`
    position: absolute;
    right: 140px;
    color: red;
    font-family: ${props => props.theme.fonts.h4.family};
    color: #F74646;
    font-size: 15px;
    font-weight: 700;

`

function SearchBar() {
    const [input, setInput] = useState("");
    const isInvalid = useTypedSelector(state => state.themeSlice.validResult)
    const currentTheme = useTypedSelector(state => state.themeSlice.currentTheme)
    return(
        <Wrapper>
            <Icon 
                src={SearchIcon}
                alt="search-icon"
            >
            </Icon>
            <Input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setInput(event.target.value)}}
                   currentTheme={currentTheme} type="text"
                   placeholder="Search GitHub User..."/>
            {isInvalid && <Error>No Result</Error>}
            <SearchButton input={input}/>
        </Wrapper>
    );
}


export default SearchBar;