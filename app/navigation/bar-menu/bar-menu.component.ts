import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.css']
})
export class BarMenuComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }
  contactColor = '#FF6F61';
  useLanguage(language: string) {
    this.translate.use(language);
    if (language === 'fr') {
      document.getElementById('fr').classList.add('selected');
      document.getElementById('en').classList.remove('selected');
      document.getElementById('frMob').classList.add('selected');
      document.getElementById('enMob').classList.remove('selected');
    } else {
      document.getElementById('en').classList.add('selected');
      document.getElementById('fr').classList.remove('selected');
      document.getElementById('enMob').classList.add('selected');
      document.getElementById('frMob').classList.remove('selected');
    }
  }
  showMobileNav = () => {
    document.getElementById('navList').hidden = false;
    document.getElementById('openMenuBtn').hidden = true;
    document.getElementById('closeMenuBtn').hidden = false;
  }
  closeMobileNav = () => {
    document.getElementById('navList').hidden = true;
    document.getElementById('openMenuBtn').hidden = false;
    document.getElementById('closeMenuBtn').hidden = true;
  }
  ngOnInit() {
  }
}
