import { Injectable } from "@angular/core";
import { Theme } from '../common/types';

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  private active: Theme;
  private availableThemes: Theme[] = [];

  setThemes(themes: Theme[]) {
    this.availableThemes = themes;
  }

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }
/*
  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }
*/
  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}