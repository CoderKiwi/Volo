import axios, {AxiosInstance} from 'axios';
import Movie from '@/models/Movie';
import Ids from '@/models/Ids';

export default class TraktApi {
    private static _instance: TraktApi;
    private static traktInstance: AxiosInstance = axios.create({
        baseURL: 'https://api.trakt.tv',
        timeout: 10000,
        headers: {
            'Content-type': 'application/json',
            'trakt-api-key': process.env.VUE_APP_TRAKT_CLIENT_ID as string,
            'trakt-api-version': 2,
        },
    });

    /** Converts from a basic (NOT extended) Trakt movie-type list to Movie array */
    private static convertToMovies(resultMovies: any) {
        return resultMovies.map((resMov: any) => {
            const movData = resMov.movie;
            const newIds = new Ids(movData.ids.trakt, movData.ids.slug, movData.ids.imdb, movData.ids.tmdb);
            return new Movie(movData.title, movData.year, newIds);
        });
    }

    private constructor() {

    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    public async getMoviesPopular(): Promise<Movie[]> {
        const resultMovies = (await TraktApi.traktInstance.get('/movies/popular')).data;

        // convert to Movie objects
        return resultMovies.map((resMov: any) => {
            const newIds = new Ids(resMov.ids.trakt, resMov.ids.slug, resMov.ids.imdb, resMov.ids.tmdb);
            return new Movie(resMov.title, resMov.year, newIds);
        });
    }

    public async getMoviesTrending(): Promise<Movie[]> {
        const resultMovies = (await TraktApi.traktInstance.get('/movies/trending')).data;
        return TraktApi.convertToMovies(resultMovies);
    }

    public async getMoviesAnticipated(): Promise<Movie[]> {
        const resultMovies = (await TraktApi.traktInstance.get('/movies/anticipated')).data;
        return TraktApi.convertToMovies(resultMovies);

    }

    public async getMoviesGrossingBoxOffice(): Promise<Movie[]> {
        const resultMovies = (await TraktApi.traktInstance.get('/movies/boxoffice')).data;
        return TraktApi.convertToMovies(resultMovies);

    }
}
