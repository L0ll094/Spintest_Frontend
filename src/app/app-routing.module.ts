import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputFormComponent } from './input-form/input-form.component';
import { NavigatorPageComponent } from './navigator-page/navigator-page.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'input-form', component: InputFormComponent},
  {path: 'navigator-page', component: NavigatorPageComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
