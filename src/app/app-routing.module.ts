import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'addmoney', loadChildren: './addmoney/addmoney.module#AddmoneyPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'account-settings', loadChildren: './account-settings/account-settings.module#AccountSettingsPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'account-details', loadChildren: './account-details/account-details.module#AccountDetailsPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
