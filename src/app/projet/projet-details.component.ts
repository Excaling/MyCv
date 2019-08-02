
import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    selector: 'projet-details',
    templateUrl: './projet-details.component.html'
})
export class ProjetDetailsComponent{
    
    public route: ActivatedRoute;
    public router: Router;

    

    constructor(pRoute: ActivatedRoute, pRouter: Router){
        this.route = pRoute;
        this.router = pRouter;
    }

    ngOnInit(){
        let id = +this.route.snapshot.paramMap.get('id');
    }
}