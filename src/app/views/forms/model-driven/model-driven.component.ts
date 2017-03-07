import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit {

   constructor(public fb: FormBuilder) { }

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  email = new FormControl('', [Validators.required]);

  contact = new FormControl('');

  loginForm: FormGroup = this.fb.group({
    name: this.name,
    email: this.email,
    contact: this.contact
  });

  ngOnInit() {
    console.log("hell");
  }

  submitData(e) {
    let formData = this.loginForm.value;
    console.log(formData);
  }


}
