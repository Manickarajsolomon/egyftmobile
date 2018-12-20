import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonComponent } from './common/common.component';

import { SignupComponent } from './signup/signup.component';
import { MywalletComponent } from './mywallet/mywallet.component';
import { BuybuisnesscardComponent } from './buybuisnesscard/buybuisnesscard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full',
  },
  { path: 'signup', component: SignupComponent },
  {
    path: 'home', component: HomeComponent, data: { Key: 'Mainshared' },
    children: [
      { path: 'mywallet', component: MywalletComponent },
      { path: 'buycards', component: BuybuisnesscardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
