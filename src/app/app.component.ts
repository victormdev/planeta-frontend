import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../app/sidebar/sidebar.component';
import { ConfigComponent } from '../app/config/config.component';
import { CadastroComponent } from '../app/cadastro/cadastro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, ConfigComponent, CadastroComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/css/nucleo-icons.css', '../assets/css/nucleo-icons.css', '../assets/css/nucleo-svg.css', '../assets/css/soft-ui-dashboard.css', '../assets/css/soft-ui-dashboard.min.css']
})
export class AppComponent {
  title = 'hostinger-planeta';
}
