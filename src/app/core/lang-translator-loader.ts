import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { TranslateLoader } from "@ngx-translate/core";
import { Observable } from "rxjs";

@Injectable()
export class LangTranslatorLoader implements TranslateLoader {
  constructor (private injector: Injector) {
  }

  getTranslation(lang: string = 'pl'): Observable<any> {
    const http =  this.injector.get(HttpClient);
    return http.get(`./assets/i18n/${lang}.json`)
  }
}
