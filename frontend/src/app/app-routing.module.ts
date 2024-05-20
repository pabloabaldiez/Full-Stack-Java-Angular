import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'inicio', pathMatch:'full'},//si no se especifica la ruta va a la paginade inicio
  {path:'inicio',component:DashboardComponent},
  {path:'iniciar-sesion',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
