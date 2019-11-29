import axios, {AxiosInstance} from "axios";
import xmlParser from 'fast-xml-parser';

export default class PlexApi {

    private static _instance: PlexApi;
    private static plexInstance: AxiosInstance = axios.create({
        baseURL: 'https://plex.tv',
        timeout: 10000,
        headers: {
            "X-Plex-Device": "Volo",
            'X-Plex-Product': 'Volo',
            "X-Plex-Platform": "Web",
            'X-Plex-Version': 3,
            'X-Plex-Client-Identifier': 1, // todo
        },
    });

    private constructor() {

    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    public async getPlexPin(): Promise<string> {
        const endpoint = '/pins.xml';
        const response = await PlexApi.plexInstance.post(endpoint);
        return xmlParser.parse(response.data).pin.code;
    }

    public async signIn(username: string, password: string): Promise<string> {
        const endpoint = '/users/sign_in.json';
        const data = {
            user: {
                login: username,
                password: password
            }
        };
        const response = await PlexApi.plexInstance.post(endpoint, data);
        return response.data.user.authToken as string;
    }
}
