import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { FormControl, FormGroup, Validators,ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../assets/css/nucleo-icons.css', '../../assets/css/nucleo-icons.css', '../../assets/css/nucleo-svg.css']
})
export class LoginComponent {
  errorMessage: string | null = null;
  invalidCredentials = false;
  loginForm!: FormGroup;
  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)]),
    });
  }

  login(): void {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
        () => {},
        (error) => {
            console.log(error);
            this.invalidCredentials = true;
            setTimeout(() => {
                this.invalidCredentials = false;
            }, 5000);
        }
    );
}
}