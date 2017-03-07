import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
 constructor() { }
inpVal: String= "hello";

submitData(detailForm: NgForm){
  console.log(detailForm.value);
}
  ngOnInit() {
  }
 
}
