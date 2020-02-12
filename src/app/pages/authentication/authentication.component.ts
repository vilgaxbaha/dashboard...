import { Component, OnInit,NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LogoutComponent } from './logout/logout.component';

@Component({
  selector: 'ngx-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'] ,
})


@NgModule({

  imports: [
    // LoginComponent,
    // RegisterComponent,
    // RequestPasswordComponent,
    // ResetPasswordComponent,
    // LogoutComponent,

  
   ],
declarations: [
  // LoginComponent,
  //   RegisterComponent,
  //   RequestPasswordComponent,
  //   ResetPasswordComponent,
  //   LogoutComponent,
  
],

})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
