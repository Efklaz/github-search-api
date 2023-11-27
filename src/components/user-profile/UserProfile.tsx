import UserInformation from './user-information/UserInformation'
import styled from 'styled-components';
import {useTypedSelector} from "../../store";

const Wrapper = styled.div<{currentTheme: string}>`
    disply: flex;
    padding: 48px;
    margin: 24px 0 0 0;
    border-radius: 15px;
    background: ${props => props.currentTheme === "light" ? "#FEFEFE" : props.theme.colors.dark.quaternary};
    box-shadow: ${props => props.currentTheme === "light" ? "0px 16px 30px -10px rgba(70, 96, 187, 0.20)" : ""};
    @media(max-width: 768px){
        padding: 40px;
    }
    @media(max-width: 375px){
        padding: 32px 24px 48px 24px;
    }
`
function UserProfile() {
    const currentTheme = useTypedSelector(state => state.themeSlice.currentTheme)
    return(
        <Wrapper currentTheme={currentTheme} >
            <UserInformation />
        </Wrapper>
    );
}


export default UserProfile;