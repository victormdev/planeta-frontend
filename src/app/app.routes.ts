import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContratosComponent } from './contratos/contratos.component';
import { RegisterComponent } from './register/register.component';
import { AgendaComponent } from './agenda/agenda.component';
import { HttpClientModule } from '@angular/common/http';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'painel', component: DashboardComponent, canActivate: [authGuard] },
    { path: 'cadastro', component: CadastroComponent, canActivate: [authGuard]  },
    { path: 'login', component: LoginComponent },
    { path: 'contratos', component: ContratosComponent, canActivate: [authGuard]  },
    { path: 'register', component: RegisterComponent },
    { path: 'agenda', component: AgendaComponent, canActivate: [authGuard]  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule, HttpClientModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
