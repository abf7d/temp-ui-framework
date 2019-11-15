import { Injectable, Inject } from "@angular/core";
import { Theme, Dictionary, THEME_TOKEN } from '../common/types';

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  private activeTheme: Theme;
  private availableThemes: Theme[] = [];

  constructor(@Inject(THEME_TOKEN) private themes: Dictionary<Theme>) { }

  setThemes(themes: Theme[]) {
    this.availableThemes = themes;
  }

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.activeTheme;
  }

  setActiveTheme(name: string): void {
    if (!this.themes.hasOwnProperty(name)) {
      throw new Error(`Theme with name ${name} was not found`);
    }

    this.activeTheme = this.themes[name];

    Object.keys(this.activeTheme.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.activeTheme.properties[property]
      );
    });
  }
}