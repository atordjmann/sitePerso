import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  experience = [{
    cie: 'Sopra Steria',
    website: 'http://www.soprasteria.com',
    titleweb: 'Website Sopra Steria',
    data: 'exp.sopra'
  },
  {
    cie: 'SNCF Mobilité',
    website: 'http://www.sncf.com',
    titleweb: 'Website SNCF',
    data: 'exp.sncf'
  }
];

projet = ['proj.cv', 'proj.job', 'proj.treeview', 'proj.elastic'];

  ngOnInit() {
    document.getElementById('sideExp').style.color = '#FF6F61';
    document.getElementById('smallTitle').hidden = false;
  }

}
