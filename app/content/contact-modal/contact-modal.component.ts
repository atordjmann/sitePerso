import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.css']
})
export class ContactModalComponent implements OnInit {

  constructor() { }
  closeModal = () => {
      document.getElementById('modal-wrapper').classList.remove('open');
      document.body.classList.toggle('blur-it');
  }
  ngOnInit() {
  }

}
