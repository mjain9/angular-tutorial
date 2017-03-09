import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children:[{
    path:'',
    redirectTo: 'example1',
    component: Example1Component
  },{
    path: 'example1',
    component: Example1Component
  },{
    path:'example2',
    component:  Example2Component
  }]
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ObservablesRoutingModule { }
