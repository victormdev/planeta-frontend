import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css', '../../assets/css/nucleo-icons.css', '../../assets/css/nucleo-icons.css', '../../assets/css/nucleo-svg.css']
})
export class CadastroComponent {
  userUpdated = false;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(){
    this.userId = localStorage.getItem("userId") || '';
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
    this.authService.getUserPJDetails(this.userId).subscribe(
      userDetailsPj => {
        this.pjnomeCompleto = userDetailsPj.nome_completo;
        this.pjrg = userDetailsPj.rg;
        this.pjcpf = userDetailsPj.cpf;
        this.pjestadoCivil = userDetailsPj.estado_civil;
        this.pjdataNascimento = userDetailsPj.data_nascimento;
        this.pjrua = userDetailsPj.rua;
        this.pjcidade = userDetailsPj.cidade;
        this.pjestado = userDetailsPj.estado;
        this.pjpais = userDetailsPj.pais;
        this.pjcep = userDetailsPj.cep;
        this.pjcelular1 = userDetailsPj.celular_1;
        this.pjcelular2 = userDetailsPj.celular_2;
        this.pjtelefone = userDetailsPj.telefone;
        this.pjemail = userDetailsPj.email;
        this.pjinstagram = userDetailsPj.instagram;
        this.pjfacebook = userDetailsPj.facebook;
        this.pjtiktok = userDetailsPj.tiktok;
        this.pjkwai = userDetailsPj.kwai;
        this.pjsite = userDetailsPj.site;
      },
      error => {
        console.error(error);
      }
    );
  }
  selectedTab = 1;

  userId!: string;
  estadoCivil!: string;
  tiktok!: string;
  kwai!: string;
  dataNascimento!: Date;
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

  pjestadoCivil!: string;
  pjtiktok!: string;
  pjkwai!: string;
  pjdataNascimento!: Date;
  pjpessoaJuridica!: string;
  pjrazaoSocial!: string;
  pjcnpj!: string;
  pjinscricaoMunicipal!: string;
  pjnomeCompleto!: string;
  pjrg!: string;
  pjcpf!: string;
  pjrua!: string;
  pjcidade!: string;
  pjestado!: string;
  pjpais!: string;
  pjcep!: string;
  pjcelular1!: string;
  pjcelular2!: string;
  pjtelefone!: string;
  pjemail!: string;
  pjinstagram!: string;
  pjfacebook!: string;
  pjsite!: string;

  selecttab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }

  isSelected(tabNumber: number) {
    return this.selectedTab === tabNumber;
  }
  logout() {
    localStorage.removeItem('angularLogin'); // Remove o token do localStorage
    this.router.navigateByUrl('/login'); // Redireciona para a tela de login
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
        this.userUpdated = true;
        setTimeout(() => {
          this.userUpdated = false;
      }, 3000);
      },
      error => {
        console.error(error);
      }
    );
  }
  
  onSaveUserPJDetails() {
    const userDetailsPj = {
      user_id: this.userId ?? null,
      nome_completo: this.pjnomeCompleto ?? null,
      rg: this.pjrg ?? null,
      cpf: this.pjcpf ?? null,
      estado_civil: this.pjestadoCivil ?? null,
      data_nascimento: this.pjdataNascimento ?? null,
      rua: this.pjrua ?? null,
      cidade: this.pjcidade ?? null,
      estado: this.pjestado ?? null,
      pais: this.pjpais ?? null,
      cep: this.pjcep ?? null,
      celular_1: this.pjcelular1 ?? null,
      celular_2: this.pjcelular2 ?? null,
      telefone: this.pjtelefone ?? null,
      email: this.pjemail ?? null,
      instagram: this.pjinstagram ?? null,
      facebook: this.pjfacebook ?? null,
      tiktok: this.pjtiktok ?? null,
      kwai: this.pjkwai ?? null
    };
    console.log('Sending user details:', userDetailsPj);
    this.authService.saveUserPJDetails(userDetailsPj).subscribe(
      response => {
        console.log('Response from API:', response);
        this.userUpdated = true;
        setTimeout(() => {
          this.userUpdated = false;
        }, 3000);
      },
      error => {
        console.error('Error from API:', error);
      }
    );
  }
  

}
