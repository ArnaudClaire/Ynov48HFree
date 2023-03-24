import { Component, Input, Output } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signInForm: FormGroup;
  // auth = getAuth();
  // connected: Boolean = false;
  //@Input() connected: any;
  @Output() connected: Boolean = false;;

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
    this.connected = true;
  }

  

}
