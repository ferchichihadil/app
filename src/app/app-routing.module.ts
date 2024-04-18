import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ServiceComponent } from './service/service.component';
import { ProjetComponent } from './projet/projet.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path:'home',component: AccueilComponent},
  { path:'services',component: ServiceComponent},
  { path:'projects',component: ProjetComponent},
  { path:'aboutus',component: AboutComponent},
  { path:'signup',component: RegisterUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
