import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CentralService {
    private _cache: CacheLookup;
    constructor() {
        this._cache = new CacheLookup();
    }
    get(id: string): Stream {
        return this._cache.get(id);
    }

}

export class Stream extends BehaviorSubject<any> {
    // Might be able to replay via mehodf
    triggerEvent() {
        let value = this.getValue();
        if (value === null) {
            value = 0;
        }
        value++;
        this.next(value);
    }
}
interface Dictionary<T> {
    [Key: string]: T;
}
interface ICacheEntry {
    stream: Stream;
    timestamp: number;
}

class CacheLookup {
    public get(key: string): Stream {
        if (this._items[key] === undefined) {
            let dataStream = new Stream(null);
            let entry: ICacheEntry = { stream: dataStream, timestamp: new Date().getTime() };
            this._items[key] = entry;
            return dataStream;
        }
        return this._items[key].stream;
    }
    _items: Dictionary<ICacheEntry> = {};

    public clear() {
        const entries = Object.entries(this._items);
        let sorted = entries.sort((a, b) => { return b[1].timestamp - a[1].timestamp });
        for (let i = 10; i < sorted.length; ++i) {
            delete this._items[sorted[i][0]];
        }
    }
}