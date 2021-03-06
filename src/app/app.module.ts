import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { InterestsComponent } from './components/interests/interests.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HttpClientModule } from '@angular/common/http';
import {DetailsService} from './services/details.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutPageComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    InterestsComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
