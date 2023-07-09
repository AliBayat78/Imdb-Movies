import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { confirmPasswordValidator } from 'src/app/validators/confirmPassword.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) {}

  get userName() {
    return this.registrationForm.get('username');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  

  registrationForm = this.fb.group(
    {
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      email: [''],
      phoneNumber: [''],
    },
    { validators: confirmPasswordValidator}
  );

  onSubmit() {
    console.log(this.registrationForm.errors);
    // localStorage.setItem(
    //   'userInfo',
    //   JSON.stringify()
    // );
  }
}
