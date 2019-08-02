import {RouterModule, Routes, Router} from '@angular/router';
import { NgModule } from '@angular/core';

import { ProjetComponent } from './projet.component';
import { ProjetDetailsComponent } from './projet-details.component';

const appProjet: Routes = [
    { path: 'Projets', component: ProjetComponent },
    { path: 'Projets/:id', component: ProjetDetailsComponent }
]


@NgModule(
    {
        imports: [
            RouterModule.forChild(appProjet)
        ],
        exports: [
            RouterModule
        ]
    }
)
export class ProjetRoutingModule{

}