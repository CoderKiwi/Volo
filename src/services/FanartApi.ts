import axios from 'axios';

// todo need to handle errors
export default class FanartApi {
    private baseUrl = 'https://webservice.fanart.tv/v3'; // todo cleanup
    private projectKey = process.env.VUE_APP_FANART_PROJECT_KEY as string;
    private timeout = 10000;
    private fanartInstance = axios.create({ // todo singleton
        baseURL: this.baseUrl,
        timeout: this.timeout,
        headers: {
            'Content-type': 'application/json', // todo find way to put api key in header rather than param
        },
    });

    public async getMovieThumb(imdbOrtvdbId: string): Promise<string> { // todo return URL
        const result = await this.fanartInstance.get(`/movies/${imdbOrtvdbId}`, {
            params: {
                api_key: this.projectKey
            }
        });
        return result.data.moviethumb[0].url as string;
    }
}
