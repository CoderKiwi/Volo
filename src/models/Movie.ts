import Ids from '@/models/Ids';
import FanartApi from '@/services/FanartApi';

export default class Movie {
    private readonly _title: string;
    private readonly _year: number;
    private readonly _ids: Ids;
    private _thumb: string = '';

    constructor(newTitle: string, newYear: number, newIds: Ids) {
        this._title = newTitle;
        this._year = newYear;
        this._ids = newIds;
        new FanartApi().getMovieThumb(this._ids.imdb)
            .then((result) => this._thumb = result);
    }

    get year(): number {
        return this._year;
    }

    get title(): string {
        return this._title;
    }

    get ids(): Ids {
        return this._ids;
    }

    get thumb(): string { // todo
        return this._thumb;
    }
}
