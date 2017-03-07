import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  title = 'Forms';
  submenu = [{
    name: 'Model-driven',
    path: 'model-driven'
  }, {
    name: 'Template-driven',
    path: 'template-driven'
  }];
  
  constructor() {
     console.log("oniniyt");
  }

  ngOnInit() {
    console.log("hel");
  }

}
