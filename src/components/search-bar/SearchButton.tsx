import styled from 'styled-components';
import axios from 'axios';
import {useTypedDispatch} from "../../store";
import {setSearchResult, setValidResult} from "../../store/rootSlice";

const Button = styled.button`
    &:hover{
        background: #60ABFF; 
    }
    position: absolute;
    right: 0;
    margin: 0 10px 0 0;
    background: #0079FF;
    border: none;
    height: 50px;
    width: 106px;
    border-radius: 10px;
    color: white;
    font-family: ${props => props.theme.fonts.h1.family};
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    @media(max-width: 375px){
        height: 46px;
        width: 84px;
        font-size: 14px;
    }

`

function SearchButton({ input } : {input : string} ) {
    const dispatch = useTypedDispatch()
    const handleSubmit = async () => {
        if(input !== ""){
            try{
                const response = await axios.get(`https://api.github.com/users/${input}`);
                if(response.status === 200){
                    dispatch(setValidResult(false))
                    const RD = response.data;
                    dispatch(setSearchResult({
                        login: RD.login,
                        avatar_url: RD.avatar_url,
                        name: RD.name,
                        company: RD.company,
                        blog: RD.blog,
                        location: RD.location,
                        bio: RD.bio,
                        twitter_username: RD.twitter_username,
                        public_repos: RD.public_repos,
                        followers: RD.followers,
                        following: RD.following,
                        created_at: RD.created_at,
                    }))

                }
            }catch(error){
                console.error("error: " + error);
                dispatch(setValidResult(true))
            }
        }
    }
    return(
        <Button onClick={handleSubmit}>
            Search
        </Button>
    );
}


export default SearchButton;