import { Component } from '@angular/core';
import {Route, Router, RouterOutlet} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public router : Router
  constructor(pRouter: Router){
    this.router = pRouter;
  }
  title = 'myCv';

}
