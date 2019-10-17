import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  exp = {titre: 'nav.exp', style: 'exp', url: '/../work-experience'};
  formation = {titre: 'nav.form', style: 'form', url: '/../education'};
  interet = {titre: 'nav.int', style: 'interet', url: '/../hobbies'};
  competence = {titre: 'nav.comp', style: 'comp', url: '/../skills'};
  contactColor = '#263056';
  constructor() { }

  ngOnInit() {
    const titleToShow = document.getElementById('smallTitle');
    titleToShow.hidden = true;
    document.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || self.pageYOffset || document.body.scrollTop;
      if (scrollTop > 175) {
        titleToShow.hidden = false;
      } else {
        titleToShow.hidden = true;
      }
    });
    document.getElementById('clicHome').addEventListener('click', () => {
      document.getElementById('home').hidden = false;
    });
    document.getElementById('clicPhone').addEventListener('click', () => {
      document.getElementById('phoneNumber').hidden = false;
    });
    document.getElementById('clicMail').addEventListener('click', () => {
      document.getElementById('mail').hidden = false;
    });
    document.getElementById('clicLinkedin').addEventListener('click', () => {
      document.getElementById('linkedinBtn').hidden = false;
    });

  }
}
