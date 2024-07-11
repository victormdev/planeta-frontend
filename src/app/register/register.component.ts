import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../assets/css/nucleo-icons.css', '../../assets/css/nucleo-icons.css', '../../assets/css/nucleo-svg.css']
})
export class RegisterComponent {
  signupForm!: FormGroup;
  constructor(){}
  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)]),
    });
  }

  signup(): void {
    console.log(this.signupForm.value);
  }
}
