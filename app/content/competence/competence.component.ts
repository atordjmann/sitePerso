import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  constructor() { }

  competences = [
    { icon : 'fa fa-code', title : 'Front-End Development', tab : ['html', 'type', 'angu', 'react', 'svelt', 'djan', 'jq'],
      class: 'skill-box skill-front' },
    { icon : 'fa fa-server', title : 'Back-End Development', tab : ['node', 'csharp', 'java'], class: 'skill-box skill-back' },
    {icon : 'fa fa-database', title : 'Data Science', tab : ['sql', 'elk'], class: 'skill-box skill-data'},
    {icon : 'fa fa-sitemap', title : 'Algorithmic', tab : ['python', 'ia', 'matlab'], class: 'skill-box skill-algo'},
    {icon : 'fa fa-users', title : 'Soft skills', tab : ['agile', 'projet'], class: 'skill-box skill-soft'},
    {icon : 'fa fa-globe', title : 'Langues', tab : ['fr', 'en', 'es'], class: 'skill-box skill-lan'},
    {icon : 'fa fa-align-left', title : 'Autre', tab : ['vba', 'adob'], class: 'skill-box skill-autre'},
  ];

  arrow;
  arrowDown = 'fas fa-chevron-down';
  arrowUp = 'fas fa-chevron-up';
  clic = (e) => {
    let div;
    if (e.target.tagName === 'H3' || e.target.tagName === 'I') {
      div = e.target.parentElement;
    } else if (e.target.tagName === 'DIV') {
      div = e.target;
    }
    for (let enfant of div.children) {
      if (enfant.tagName === 'P') {
        enfant.hidden = !enfant.hidden;
      }
    }
  }

  ngOnInit() {
    document.getElementById('smallTitle').hidden = false;
    document.getElementById('sideComp').style.color = '#FF6F61';
  }

}
