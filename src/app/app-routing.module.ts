import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import{HeroesComponent} from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ObservabledemoComponent } from './observabledemo/observabledemo.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
const routes: Routes = [
  {path: 'heroes' , component: HeroesComponent },
  {path: 'dashboard' , component: DashboardComponent },
  {path: 'observable' , component: ObservabledemoComponent },
  {path: 'child' , component: ChildComponent },
  {path: 'parent' , component:ParentComponent},
  {path: 'detail/:id' , component:HeroDetailComponent},
  {path:'', redirectTo:'/dashboard',pathMatch:'full'}
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
