export type User = {
    login: string,
    avatar_url: string,
    name: string | null,
    company: string | null,
    blog: string | null,
    location: string | null,
    bio: string | null,
    twitter_username: string | null,
    public_repos: number,
    followers: number,
    following: number,
    created_at: string,
}
export type TState = {
    currentTheme : 'dark' | 'light',
    searchResult : User | null,
    validResult : boolean | null
}