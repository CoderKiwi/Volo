import axios from 'axios';

// todo need to handle errors
export default class FanartApi {
    private projectKey = process.env.VUE_APP_FANART_PROJECT_KEY as string;
    private static fanartInstance = axios.create({ // todo singleton
        baseURL: 'https://webservice.fanart.tv/v3',
        timeout: 10000,
        headers: {
            'Content-type': 'application/json', // todo find way to put api key in header rather than param
        },
    });

    public async getMovieThumb(imdbOrTvdbId: string): Promise<string> {
        return await FanartApi.fanartInstance.get(`/movies/${imdbOrTvdbId}`, {
            params: {
                api_key: this.projectKey,
            },
        }).then(function(result) {
            return result.data.moviethumb[0].url as string;
        }).catch(function(error) {
            console.log();
            return ''; // todo fix
        });
    }
}
