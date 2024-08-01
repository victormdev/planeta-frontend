import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../assets/css/nucleo-icons.css', '../../assets/css/nucleo-icons.css', '../../assets/css/nucleo-svg.css']
})
export class DashboardComponent {
  constructor(private router: Router){}
  logout() {
    localStorage.removeItem('angularLogin'); // Remove o token do localStorage
    this.router.navigateByUrl('/login'); // Redireciona para a tela de login
  }
}