import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css', '../../assets/css/nucleo-icons.css', '../../assets/css/nucleo-icons.css', '../../assets/css/nucleo-svg.css']
})
export class CadastroComponent {
  selectedTab = 1;

  selecttab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }

  isSelected(tabNumber: number) {
    return this.selectedTab === tabNumber;
  }
}
