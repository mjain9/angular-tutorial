import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class Example1Component implements OnInit {
  private obsvData: Observable<any>;
  private values: Array<number>=[];
  private anyErrors: boolean;
  private finished: boolean;

  init(){
    this.obsvData= new Observable(observer=>{
      setTimeout(() => {
         observer.next(1);
      },1000);
      setTimeout(() => {
         observer.next(2);
      },2000);
      setTimeout(() => {
         observer.next(3);
      },3000);
       setTimeout(() => {
              observer.complete();
          }, 4000);
    });

let subscription= this.obsvData.subscribe(
  value => this.values.push(value),
  error => this.anyErrors= false,
  () => this.finished =true
);
  }

  constructor() { }

  ngOnInit() {
  }

}
