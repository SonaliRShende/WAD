import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string='';
  password:string='';
  errormessage:string='';

  constructor(private authService: AuthService , private router:Router){}

  login(){
    if(this.authService.login(this.username , this.password)){
      this.router.navigate(['/profile']);
    }else{
      this.errormessage='invalid username or password';
    }
  }
}
