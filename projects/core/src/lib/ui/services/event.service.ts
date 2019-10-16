import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dictionary } from '../../common/types';

@Injectable({
    providedIn: 'root',
})
export class EventService {

    private cache: Dictionary<BehaviorSubject<any>> = {};

    public get(key: string): BehaviorSubject<any> {
        if (!this.cache[key]) {
            const entry = new BehaviorSubject<any>(null);
            this.cache[key] = entry;
            return entry;
        }
        return this.cache[key];
    }

}
