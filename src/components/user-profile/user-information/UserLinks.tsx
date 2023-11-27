import styled from "styled-components";
import LocationIconLight from '../../../icons/icon-location.svg'
import TwitterIconLight from '../../../icons/icon-twitter.svg'
import CompanyIconLight from '../../../icons/icon-company.svg'
import WebsiteIconLight from '../../../icons/icon-website.svg'
import LocationIconDark from '../../../icons/icon-location-dark.svg'
import TwitterIconDark from '../../../icons/icon-twitter-dark.svg'
import CompanyIconDark from '../../../icons/icon-company-dark.svg'
import WebsiteIconDark from '../../../icons/icon-website-dark.svg'
import {useTypedSelector} from "../../../store";

const Wrapper = styled.div`    
    grid-area: links;
    margin: 37px 0 0 0;
    display: grid;
    grid-template-columns: auto auto;
    gap: 19px;
    @media(max-width: 375px){
        display: flex;
        flex-direction: column;
    }
`
const InformationWrapper = styled.div`
    display: flex;
    gap: 19px;
    align-items: center;
`
const Span = styled.span<{currentTheme: string, isAvailable: boolean}>`
    font-family: ${props => props.theme.fonts.body.family};
    font-size: ${props => props.theme.fonts.body.size};
    font-weight: ${props => props.theme.fonts.body.weight};
    line-height: ${props => props.theme.fonts.body.lineHeight};
    color: ${props => props.currentTheme === "light" ? props.theme.colors.light.tertiary : "#FFFFFF"};
    @media(max-width: 375px){
        font-size: 13px;
    };
    opacity: ${props => props.isAvailable ? 1 : 0.5};
`
const Icon = styled.img<{isAvailable: boolean}>`
    opacity: ${props => props.isAvailable ? 1 : 0.5};
`
const LocationStyle = styled(Span)<{currentTheme: string}>`
    margin-left: 6px;
`
const Anchor = styled(Span).attrs({as : 'a'})<{currentTheme: string, isAvailable: boolean}>`
    &:hover{
        text-decoration: ${props => props.isAvailable ? 'underline' : 'none'};
    }
    display: inline;
    text-decoration: none;   
    
`

function UserLinks() {
    const searchResult = useTypedSelector(state => state.themeSlice.searchResult)
    const currentTheme = useTypedSelector(state => state.themeSlice.currentTheme)

    const twitterAttributes = searchResult?.twitter_username ? { href: `https://twitter.com/${searchResult.twitter_username}` }: {};
    const blogAttributes = searchResult?.blog ? { href: `${searchResult?.blog}` }: {};
    const companyAttributes = searchResult?.company ? { href: `https://github.com/${searchResult?.company.slice(1)}` }: {};

    return(
        <Wrapper>
            <InformationWrapper>
                <Icon src={currentTheme === "light" ? LocationIconLight : LocationIconDark} alt="Location" height="20px" width="14px" isAvailable={!!searchResult?.location} />
                <LocationStyle currentTheme={currentTheme} isAvailable={!!searchResult?.location}>{(searchResult?.location ? (searchResult.location.length > 20 ? searchResult.location.substring(0, 20) + "..." : searchResult.location) : "Not Available")}</LocationStyle>
            </InformationWrapper>
            <InformationWrapper>
                <Icon src={currentTheme === "light" ? TwitterIconLight : TwitterIconDark} alt="Twitter" height="17px" width="20px" isAvailable={!!searchResult?.twitter_username}/>
                <Anchor {...twitterAttributes} currentTheme={currentTheme} isAvailable={!!searchResult?.twitter_username}>{(searchResult?.twitter_username ? (searchResult.twitter_username.length > 20 ? searchResult.twitter_username.substring(0, 20) + "..." : searchResult.twitter_username) : "Not Available")}</Anchor>
            </InformationWrapper>
            <InformationWrapper>
                <Icon src={currentTheme === "light" ? WebsiteIconLight : WebsiteIconDark} alt="Website" height="20px" width="20px" isAvailable={!!searchResult?.blog}/>
                <Anchor {...blogAttributes} currentTheme={currentTheme} isAvailable={!!searchResult?.blog}>{(searchResult?.blog ? (searchResult.blog.length > 20 ? searchResult.blog.substring(0, 20) + "..." : searchResult.blog) : "Not Available")}</Anchor>
            </InformationWrapper>
            <InformationWrapper>
                <Icon src={currentTheme === "light" ? CompanyIconLight : CompanyIconDark} alt="Company" height="20px" width="20px" isAvailable={!!searchResult?.company}/>
                <Anchor {...companyAttributes} currentTheme={currentTheme} isAvailable={!!searchResult?.company}>{(searchResult?.company ? (searchResult.company.length > 20 ? searchResult.company.substring(0, 20) + "..." : searchResult.company) : "Not Available")}</Anchor>
            </InformationWrapper>
        </Wrapper>
    );
}


export default UserLinks;