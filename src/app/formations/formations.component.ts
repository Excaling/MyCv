import { Component, OnInit } from '@angular/core';
import { Formation } from './formation';
import { FORMATIONS } from './FORMATIONS'

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  constructor() { }
  public formations: Formation[];
  public loaded: boolean = false;

  ngOnInit() {
    this.loaded = true;
    this.formations = FORMATIONS;
  }

}
