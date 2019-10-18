import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-template',
  templateUrl: './cv-template.component.html',
  styleUrls: ['./cv-template.component.css']
})
export class CvTemplateComponent implements OnInit {

  competences = [
    { icon : 'fa fa-code', title : 'Front-End Development', tab : ['html', 'type', 'angu', 'react', 'djan', 'jq'],
      class: 'skill-box skill-front' },
    { icon : 'fa fa-server', title : 'Back-End Development', tab : ['node', 'csharp', 'java'], class: 'skill-box skill-back' },
    {icon : 'fa fa-database', title : 'Data Science', tab : ['sql', 'elk'], class: 'skill-box skill-data'},
    {icon : 'fa fa-sitemap', title : 'Algorithmic', tab : ['python', 'ia', 'matlab'], class: 'skill-box skill-algo'},
    {icon : 'fa fa-users', title : 'Soft skills', tab : ['agile', 'projet'], class: 'skill-box skill-soft'},
    {icon : 'fa fa-globe', title : 'Langues', tab : ['fr', 'en', 'es'], class: 'skill-box skill-lan'},
    {icon : 'fa fa-align-left', title : 'Autre', tab : ['vba', 'adob'], class: 'skill-box skill-autre'},
  ];
  constructor() { }

  printCv = () => {
    const content = document.getElementById('cvHtml').outerHTML;
    const head = window.document.head.innerHTML;
    const mywindow = window.open('', 'Print', 'height=600,width=800');
    mywindow.document.write('<html><head>');
    mywindow.document.write(head);
    mywindow.document.write('</head><body>');
    mywindow.document.write(content);
    mywindow.document.write('</body></html>');
    mywindow.focus();
    setInterval(() => {
      mywindow.print();
      mywindow.close();
    } , 2000);


  }
  ngOnInit() {
  }

}
