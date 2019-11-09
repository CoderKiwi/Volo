export default class Ids {
    private readonly _trakt: number;
    private readonly _slug: string;
    private readonly _imdb: string;
    private readonly _tmdb: number;

    constructor(newTrakt: number, newSlug: string, newImdb: string, newTmdb: number) {
        this._trakt = newTrakt;
        this._slug = newSlug;
        this._imdb = newImdb;
        this._tmdb = newTmdb;
    }
}
