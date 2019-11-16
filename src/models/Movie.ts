import Ids from '@/models/Ids';
import FanartApi from '@/services/impl/FanartApi';

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

    set thumbUrl(value: string) {
        this._thumbUrl = value;
    }
}
