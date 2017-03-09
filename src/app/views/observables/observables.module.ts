import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesRoutingModule } from './observables-routing.module';
import { HomeComponent } from './home/home.component';

import { SharedModule } from '../../shared/shared.module';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';

@NgModule({
  imports: [
    CommonModule,
    ObservablesRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, Example1Component, Example2Component]
})
export class ObservablesModule { }
