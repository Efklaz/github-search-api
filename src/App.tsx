import { useEffect } from 'react';
import Header from './components/header/Header'
import SearchBar from './components/search-bar/SearchBar'
import UserProfile from './components/user-profile/UserProfile'
import styled from 'styled-components'
import axios from 'axios';
import {useTypedDispatch, useTypedSelector} from "./store";
import { setSearchResult } from "./store/rootSlice";

const Wrapper = styled.div<{currentTheme: string}>`
  background: ${props => props.currentTheme === "light" ? props.theme.colors.light.quinary : props.theme.colors.dark.tertiary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const WrapperBox = styled.div`
  width: 730px;
  @media (max-width: 768px) {
    width: 573px;
  }
  @media (max-width: 375px) {
    width: 327px;
  }
`
function App() {
    const systemTheme = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const currentTheme = useTypedSelector(state => state.themeSlice.currentTheme)
    const dispatch = useTypedDispatch()
    const fetchUser = async () => {
    try{
      const response = await axios.get(`https://api.github.com/users/efklaz`);
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
    }catch(error){
      console.error("error: " + error);
    }
  }
  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <Wrapper currentTheme={currentTheme}>
      <WrapperBox>
        <Header/>
        <SearchBar/>
        <UserProfile/>
      </WrapperBox>
    </Wrapper>
  );
}

export default App;
