import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  loginOrSignUp = true;

  switchMode() {
    this.loginOrSignUp = !this.loginOrSignUp;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }
}
