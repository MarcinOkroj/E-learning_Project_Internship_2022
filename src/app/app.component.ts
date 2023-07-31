import { PreferredLanguageService } from './core/services/preferred-language.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService,
    private preferredLanguage: PreferredLanguageService) {
    translate.setDefaultLang(this.preferredLanguage.getPreferredLanguage());
    translate.use(this.preferredLanguage.getPreferredLanguage());
  }

  ngOnInit() {
    //
  }
}
