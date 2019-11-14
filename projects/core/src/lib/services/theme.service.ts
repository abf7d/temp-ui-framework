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