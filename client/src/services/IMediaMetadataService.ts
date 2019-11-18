import Movie from '@/models/Movie';

export default interface IMediaMetadataService {
    getMoviesPopular(): Promise<Movie[]>;

    getMoviesTrending(): Promise<Movie[]>;

    getMoviesAnticipated(): Promise<Movie[]>;

    getMoviesGrossingBoxOffice(): Promise<Movie[]>;
}
