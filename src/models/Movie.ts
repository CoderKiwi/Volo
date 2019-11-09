import Ids from '@/models/Ids';

export default class Movie {
    private readonly _title: string;
    private readonly _year: number;
    private readonly _ids: any;

    constructor(newTitle: string, newYear: number, newIds: Ids) {
        this._title = newTitle;
        this._year = newYear;
        this._ids = newIds;
    }

    get year(): number {
        return this._year;
    }

    get title(): string {
        return this._title;
    }
}
