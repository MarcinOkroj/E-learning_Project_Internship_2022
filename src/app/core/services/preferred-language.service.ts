import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferredLanguageService {

  private preferredLanguageKey = 'ttms-kursy.language';

  constructor() { }

  savePreferredLanguage(language: string) {
    localStorage.setItem(this.preferredLanguageKey, language);
  }

  getPreferredLanguage(): string {
    let lang = localStorage.getItem(this.preferredLanguageKey);

    if (lang === null || lang === "")
      return "pl"
    else
      return lang
  }
}
