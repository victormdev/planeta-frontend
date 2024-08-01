import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-contratos',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './contratos.component.html',
  styleUrl: './contratos.component.css'
})
export class ContratosComponent {
  constructor(private router: Router){}
  logout() {
    localStorage.removeItem('angularLogin'); // Remove o token do localStorage
    this.router.navigateByUrl('/login'); // Redireciona para a tela de login
  }
}
