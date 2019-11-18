export default interface IMediaImageService {
    getMovieThumb(imdbOrTvdbId: string): Promise<string>;
}
