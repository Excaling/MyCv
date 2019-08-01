import {NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { FormationsComponent } from './formations/formations.component';
import { AboutComponent } from './about/about.component';
import { CompetencesComponent } from './competences/competences.component';
import { NotFoundComponent } from './not-found.component';

const appRoutes: Routes = [

    { path: "Accueil", component: AboutComponent},
    { path: "Formations", component: FormationsComponent},
    { path: "Competences", component: CompetencesComponent },
    { path:'', redirectTo : 'Accueil', pathMatch: 'full' },
    {path:"**", component : NotFoundComponent}
]

@NgModule({
    
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
        ]
    
})
export class AppRoutingModule{}