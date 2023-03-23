import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signInForm: FormGroup;
  // auth = getAuth();

  constructor(private formBuilder: FormBuilder) {
    this.signInForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit() {
    // this.auth.onAuthStateChanged(console.log);
  }

  onSubmit() {
    if (this.signInForm.valid) {
      // this.authService.signIn(this.signInForm.value.email, this.signInForm.value.password);
    }
  }

  

}
