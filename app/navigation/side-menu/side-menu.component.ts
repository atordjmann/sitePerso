import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const toggler = document.getElementsByClassName('nav-elmt');
    let i;
    if (document.body.offsetWidth > 780) {
    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener('mouseover', function() {
        this.querySelector('span').hidden = false;
        document.getElementById('sideBarMenu').style.width = '150px';
        document.getElementById('sideBarMenu').style.marginRight = '0px';
      });
      toggler[i].addEventListener('mouseout', function() {
        this.querySelector('span').hidden = true;
        document.getElementById('sideBarMenu').style.width = 'auto';
        document.getElementById('sideBarMenu').style.marginRight = '100px';
      });
    }
  }
}

}
