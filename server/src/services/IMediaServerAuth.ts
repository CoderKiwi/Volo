export default interface IMediaServerAuth {
    getPlexPin(isStrong: boolean): Promise<string>
    signIn(username: string, password: string): Promise<string>
}
