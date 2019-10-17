import { CvTemplateComponent } from './content/cv-template/cv-template.component';
import { FormationComponent } from './content/formation/formation.component';
import { HomeComponent } from './navigation/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceComponent } from './content/experience/experience.component';
import { InteretComponent } from './content/interet/interet.component';
import { CompetenceComponent } from './content/competence/competence.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'education', component: FormationComponent },
  { path: 'work-experience', component: ExperienceComponent },
  { path: 'skills', component: CompetenceComponent },
  { path: 'hobbies', component: InteretComponent },
  { path: 'resume', component: CvTemplateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
