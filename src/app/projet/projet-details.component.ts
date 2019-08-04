
import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Projet } from './projet';
import { PROJETS } from './PROJETS';
import { Location } from '@angular/common';

@Component({
    selector: 'projet-details',
    templateUrl: './projet-details.component.html',
    styleUrls: ['./projet-details.component.css']
})
export class ProjetDetailsComponent{
    
    public route: ActivatedRoute;
    public router: Router;

    public projet: Projet;
    public projets: Projet [];
    public location: Location;

    constructor(pRoute: ActivatedRoute, pRouter: Router, pLocation: Location){
        this.route = pRoute;
        this.router = pRouter;
        this.location = pLocation;
    }

    ngOnInit(){
        let id = +this.route.snapshot.paramMap.get('id');
        let isProjet: Boolean = false;
        let i: number = 0;
        this.projets = PROJETS;

        while( i < this.projets.length &&  isProjet == false){
            if(this.projets[i].id == id){
                this.projet = this.projets[i];
                isProjet = true;
            }
            i++;
        }
    }

    goBack(){
        this.location.back();
    }
}