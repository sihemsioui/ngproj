import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import {AddEmpComponent } from './add-emp/add-emp.component';
import { LoginComponent} from './login/login.component';
import{ RegisterComponent} from './register/register.component';
import{AuthGuardService} from './auth-guard.service';

import { from } from 'rxjs';


const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'employees', canActivate: [AuthGuardService], component: ListEmpComponent },
  { path: 'add', canActivate: [AuthGuardService], component: AddEmpComponent },
  { path: 'update/:id', canActivate: [AuthGuardService], component: EditEmpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
