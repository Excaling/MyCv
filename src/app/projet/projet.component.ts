import { Component } from '@angular/core';

import { Projet } from './projet';
import { PROJETS } from './PROJETS';
@Component(
    {
        selector: 'projet',
        templateUrl: './projet.component.html',
        styleUrls: ['./projet.component.css']
    }
)
export class ProjetComponent{
    public projets: Projet[]
    ngOnInit(){
        this.projets = PROJETS;
    }

    displayProjet(pProjet: Projet): void{
        
    }
}