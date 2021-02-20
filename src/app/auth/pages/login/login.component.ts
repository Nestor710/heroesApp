import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../interface/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuarios:Auth;

  constructor( private router:Router,
                private authSerive:AuthService ) { }

  login(){
    // Ir al backend
    // buscar un usuario

    this.authSerive.login()
    .subscribe( usuario => {
      if (usuario) {
        this.router.navigate(['./heroes']);
      } else {
        return;
      }
    });





  }

}
