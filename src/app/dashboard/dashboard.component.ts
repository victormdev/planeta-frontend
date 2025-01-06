import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../assets/css/nucleo-icons.css', '../../assets/css/nucleo-icons.css', '../../assets/css/nucleo-svg.css']
})
export class DashboardComponent {
  userId: string = '';
  pjnomeCompleto: string = ''; // Para armazenar o nome completo

  constructor(private router: Router, private authService: AuthService){}

  ngOnInit() {
    // Obtém o userId do localStorage
    this.userId = localStorage.getItem('userId') || '';

    // Verifica se o userId está definido
    if (this.userId) {
      this.authService.getUserPJDetails(this.userId).subscribe(
        userDetailsPj => {
          // Obtém o nome completo do usuário
          this.pjnomeCompleto = userDetailsPj.nome_completo;
        },
        error => {
          console.error('Erro ao obter os detalhes do usuário:', error);
        }
      );
    } else {
      console.error('Nenhum userId encontrado no localStorage.');
    }
  }
  
  logout() {
    localStorage.removeItem('angularLogin'); // Remove o token do localStorage
    this.router.navigateByUrl('/login'); // Redireciona para a tela de login
  }
}