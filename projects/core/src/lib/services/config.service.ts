import { Injectable, Inject } from "@angular/core";
import { CONFIG_TOKEN } from '../common/types';
import { EventService } from './event.service';

@Injectable({
  providedIn: "root"
})
export class ConfigService {

  constructor(
    @Inject(CONFIG_TOKEN) private configs: any,
    private eventService: EventService) { }

  setActiveConfig(name: string): void {
    if (!this.configs.hasOwnProperty(name)) {
      throw new Error(`Config with name ${name} was not found`);
    }
    this.eventService.get(CONFIG_TOKEN).next(this.configs[name]);
  }
}