import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-btn',
  templateUrl: './contact-btn.component.html',
  styleUrls: ['./contact-btn.component.css']
})
export class ContactBtnComponent implements OnInit {
  @Input() couleur;
  constructor() { }
  openContact = () => {
    document.getElementById('modal-wrapper').classList.toggle('open');
    document.body.classList.toggle('blur-it');
  }

  ngOnInit() {
  }

}
