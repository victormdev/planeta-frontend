import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css', '../../assets/css/nucleo-icons.css', '../../assets/css/nucleo-icons.css', '../../assets/css/nucleo-svg.css']
})
export class CadastroComponent {
  constructor(private authService: AuthService) {}
  ngOnInit(){
    this.userId = this.authService.getUserId();
    console.log(this.userId); // Verifique se o userId está correto
    this.authService.getUserDetails(this.userId).subscribe(
      userDetails => {
        this.pessoaJuridica = userDetails.pessoa_juridica;
        this.razaoSocial = userDetails.razao_social;
        this.cnpj = userDetails.cnpj;
        this.inscricaoMunicipal = userDetails.inscricao_municipal;
        this.nomeCompleto = userDetails.nome_completo;
        this.rg = userDetails.rg;
        this.cpf = userDetails.cpf;
        this.rua = userDetails.rua;
        this.cidade = userDetails.cidade;
        this.estado = userDetails.estado;
        this.pais = userDetails.pais;
        this.cep = userDetails.cep;
        this.celular1 = userDetails.celular_1;
        this.celular2 = userDetails.celular_2;
        this.telefone = userDetails.telefone;
        this.email = userDetails.email;
        this.instagram = userDetails.instagram;
        this.facebook = userDetails.facebook;
        this.site = userDetails.site;
      },
      error => {
        console.error(error);
      }
    );
  }
  selectedTab = 1;

  userId!: string;
  pessoaJuridica!: string;
  razaoSocial!: string;
  cnpj!: string;
  inscricaoMunicipal!: string;
  nomeCompleto!: string;
  rg!: string;
  cpf!: string;
  rua!: string;
  cidade!: string;
  estado!: string;
  pais!: string;
  cep!: string;
  celular1!: string;
  celular2!: string;
  telefone!: string;
  email!: string;
  instagram!: string;
  facebook!: string;
  site!: string;


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

  onSaveDetails() {
    const userDetails = {
      user_id: this.userId ?? null,
      pessoa_juridica: this.pessoaJuridica ?? null,
      razao_social: this.razaoSocial ?? null,
      cnpj: this.cnpj ?? null,
      inscricao_municipal: this.inscricaoMunicipal ?? null,
      nome_completo: this.nomeCompleto ?? null,
      rg: this.rg ?? null,
      cpf: this.cpf ?? null,
      rua: this.rua ?? null,
      cidade: this.cidade ?? null,
      estado: this.estado ?? null,
      pais: this.pais ?? null,
      cep: this.cep ?? null,
      celular_1: this.celular1 ?? null,
      celular_2: this.celular2 ?? null,
      telefone: this.telefone ?? null,
      email: this.email ?? null,
      instagram: this.instagram ?? null,
      facebook: this.facebook ?? null,
      site: this.site ?? null
    };
    console.log(userDetails);
    this.authService.saveDetails(userDetails).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }
  

}
