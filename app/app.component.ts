import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'page-perso-cv-angular';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }
  useLanguage(language: string) {
    this.translate.use(language);
}
}
