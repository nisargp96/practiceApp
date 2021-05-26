import { NgModule, Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomePage } from './home.page';
import { SignInPage} from '.././sign-in/sign-in.page';
import { NavController } from '@ionic/angular';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule  {

  constructor(private navController: NavController, private router: Router){

  }
  

}


