import { Component } from '@angular/core';

import { Projet } from './projet';
import { PROJETS } from './PROJETS';
import { Router } from '@angular/router';
@Component(
    {
        selector: 'projet',
        templateUrl: './projet.component.html',
        styleUrls: ['./projet.component.css']
    }
)
export class ProjetComponent{
    constructor(pRoute: Router){
        this.router = pRoute;
    }

    public router: Router;
    public projets: Projet[]
    ngOnInit(){
        this.projets = PROJETS;
    }

    displayProjet(pProjet: Projet): void{
        this.router.navigate(['/Projets/' + pProjet.id]);
    }

    
}