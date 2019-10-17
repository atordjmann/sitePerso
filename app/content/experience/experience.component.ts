import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('sideExp').style.color = '#FF6F61';
    document.getElementById('smallTitle').hidden = false;
  }

}
