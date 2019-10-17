import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interet',
  templateUrl: './interet.component.html',
  styleUrls: ['./interet.component.css']
})
export class InteretComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('sideInt').style.color = '#FF6F61';
    document.getElementById('smallTitle').hidden = false;
  }

}
