import axios, {AxiosInstance} from 'axios';
import IMediaImageService from '@/services/IMediaImageService';

export default class FanartApi implements IMediaImageService {

    private static _instance: FanartApi;
    private static fanartInstance: AxiosInstance = axios.create({
        baseURL: 'https://webservice.fanart.tv/v3',
        timeout: 10000,
        headers: {
            'Content-type': 'application/json',
        },
    });
    private projectKey = process.env.VUE_APP_FANART_PROJECT_KEY as string;

    private constructor() {

    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    /** Fetches the top thumbnail URL of the given media or returns the URI to the 'no image' asset */
    public async getMovieThumb(imdbOrTvdbId: string): Promise<string> {
        try {
            return await FanartApi.fanartInstance.get(`/movies/${imdbOrTvdbId}`, {
                params: {
                    api_key: this.projectKey,
                },
            }).then((response) => {
                return response.data.moviethumb[0].url as string;
            });
        } catch (error) {
            return require('@/assets/no-image.png');
        }
    }
}
