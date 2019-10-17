import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('smallTitle').hidden = false;
    document.getElementById('sideForm').style.color = '#FF6F61';
  }

}
