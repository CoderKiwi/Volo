import Ids from '@/models/Ids';
import FanartApi from '@/services/FanartApi';

export default class Movie {
    private readonly _title: string;
    private readonly _year: number;
    private readonly _ids: Ids;
    private _thumbUrl: string;

    constructor(newTitle: string, newYear: number, newIds: Ids) {
        this._title = newTitle;
        this._year = newYear;
        this._ids = newIds;
        this._thumbUrl = '';
        FanartApi.instance.getMovieThumb(this._ids.imdb)
            .then((result) => this._thumbUrl = result);
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

    get thumbUrl(): string {
        return this._thumbUrl;
    }
}
