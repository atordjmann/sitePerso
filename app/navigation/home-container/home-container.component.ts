import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

@Input() categorie: string;
@Input() style: string;
@Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
