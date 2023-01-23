import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  message: string
  password: string
  auth: AuthService;
  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(){
    this.auth = this.authService
  }

  setMessage(){
    if (this.auth.isLoggedIn) {
      this.message='Vous etes connecté'
    }else{
      this.message='Code incorrect'
    }
  }

  login() {
    this.message = 'Tentative de connexion en cours...'
    this.authService.login(this.password).subscribe((isLoggedIn: Boolean)=> {
      this.setMessage();

      if (isLoggedIn) {
        this.router.navigate(['/home'])
      }else{
        this.password = '';
        this.router.navigate(['/login'])
      }
    })
  }

  logout(){
    this.auth.logout();
    this.message = 'Vous etes deconnecté'
  }
}
