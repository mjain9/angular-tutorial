import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  title = 'Observables';
  submenu = [{
    name: 'Example1',
    path: 'example1'
  }, {
    name: 'Example2',
    path: 'example2'
  }];

  constructor() { }

  ngOnInit() {
  }

}
