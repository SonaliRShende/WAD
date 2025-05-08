import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user:any;
  constructor(private authService:AuthService , private router:Router){}

  ngOnInit():void{
    this.user = this.authService.getCurrentUser();
    if(!this.user){
      this.router.navigate(['login']);
    }
  }

  logout(){
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
