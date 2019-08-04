import { Component, OnInit } from '@angular/core';
import { PASSIONS } from './passions';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  public passions : string[];
  public description: string = "Actuellement étudiant Licence 3 MIASHS parcours MIAGE en Alternance chez ARCYS à la suite de mon DUT informatique à l'IUT de Blagnac, Je suis passionné par l'informatique. Les expériences que j'ai acquises grâce à ma formation et en autodidacte m'ont permises d'avoir une certaine polyvalence. Je peux ainsi développer des applications web, mobile et bureau."
  ngOnInit() {
    this.passions = PASSIONS;
  }

}
