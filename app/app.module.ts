import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarMenuComponent } from './navigation/bar-menu/bar-menu.component';
import { HomeComponent } from './navigation/home/home.component';
import { HomeContainerComponent } from './navigation/home-container/home-container.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { FormationComponent } from './content/formation/formation.component';
import { InteretComponent } from './content/interet/interet.component';
import { CompetenceComponent } from './content/competence/competence.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { CvTemplateComponent } from './content/cv-template/cv-template.component';
import { PrintCvComponent } from './content/print-cv/print-cv.component';
import { SideMenuComponent } from './navigation/side-menu/side-menu.component';
import { ContactBtnComponent } from './content/contact-btn/contact-btn.component';
import { ContactModalComponent } from './content/contact-modal/contact-modal.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    BarMenuComponent,
    HomeComponent,
    HomeContainerComponent,
    ExperienceComponent,
    FormationComponent,
    InteretComponent,
    CompetenceComponent,
    FooterComponent,
    CvTemplateComponent,
    PrintCvComponent,
    SideMenuComponent,
    ContactBtnComponent,
    ContactModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
