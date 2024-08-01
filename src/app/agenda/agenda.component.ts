import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  constructor(private router: Router){}
  logout() {
    localStorage.removeItem('angularLogin'); // Remove o token do localStorage
    this.router.navigateByUrl('/login'); // Redireciona para a tela de login
  }
}
