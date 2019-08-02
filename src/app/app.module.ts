import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProjetModule } from './projet/projet.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

import { AppRoutingModule } from './app-routing.module';
import { FormationsComponent } from './formations/formations.component';
import { CompetencesComponent } from './competences/competences.component';
import { NotFoundComponent } from './not-found.component';




import { ColorSkillPipe } from './competences/color-skill.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FormationsComponent,
    CompetencesComponent,
    ColorSkillPipe,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ProjetModule,
    AppRoutingModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
