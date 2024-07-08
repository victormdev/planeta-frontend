import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, CommonModule, FormsModule],
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

  channelTypes = [
    "",
    "Instagram",
    "Facebook",
    "Tik Tok",
    "Kawai",
    "Canal Youtube",
    "Site",
    "Canal Sua Música",
    "Rádios",
    "Playlists"
  ];

  channels = [{ type: this.channelTypes[0], url: '' }];

  addChannel() {
    this.channels.push({ type: this.channelTypes[0], url: '' });
  }

  removeChannel(index: number) {
    this.channels.splice(index, 1);
  }

  submitChannels() {
    console.log(this.channels);
  }
}
