import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interet',
  templateUrl: './interet.component.html',
  styleUrls: ['./interet.component.css']
})
export class InteretComponent implements OnInit {

  constructor() { }

  description;

  clic = (e) => {
    this.description = e.target.querySelector('#demo2');
    console.log(e);
  }

  ngOnInit() {
    document.getElementById('sideInt').style.color = '#FF6F61';
    document.getElementById('smallTitle').hidden = false;
  }

}
