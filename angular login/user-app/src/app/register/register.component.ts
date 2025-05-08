import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username:string='';
  password:string='';

  constructor(private authService: AuthService, private router: Router){}

  register(){
    this.authService.register(this.username ,this.password);
    this.router.navigate(['login']);
  }
}
