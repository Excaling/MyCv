import { Component, OnInit } from '@angular/core';
import {Competence} from  './competence';
import { COMPETENCES } from './COMPETENCES';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {

  constructor() { }
  private loaded: boolean = false;

  public competences: Competence[] = null ;

  ngOnInit() {
    this.loaded = true;
    this.competences = COMPETENCES;
  }

}
