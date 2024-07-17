import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { SidebarComponent } from '../app/sidebar/sidebar.component';
import { ConfigComponent } from '../app/config/config.component';
import { CadastroComponent } from '../app/cadastro/cadastro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SidebarComponent, ConfigComponent, CadastroComponent, DashboardComponent, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/css/nucleo-icons.css', '../assets/css/nucleo-icons.css', '../assets/css/nucleo-svg.css']
})
export class AppComponent {
  title = 'hostinger-planeta';
}
