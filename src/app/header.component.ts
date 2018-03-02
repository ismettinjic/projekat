import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AuthService } from './auth.service';

@Component({
  selector: 'app-header',
  template: `
       
  <header>
      <nav class="navbar navbar-default">
          <div class="container-fluid">
  
              <ul class="nav navbar-nav">
  
                  <li><a [routerLink]="['singup']">Sign Up</a></li>
                  <li><a [routerLink]="['singin']">Sign In</a></li>
                  <li><a [routerLink]="['protected']">Protected</a></li>
  
              </ul>
              <ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">
  
                  <li><a (click)="onLogout()">Logout</a></li>
              </ul>
          </div><!-- /.container-fluid -->
  
      </nav>
  
  </header>
`
})
export class HeaderComponent  {

  constructor(private authService: AuthService) { }


  isAuth(){
      return this.authService.isAutenticated();

  }
  onLogout(){
      this.authService.logout();
  }
 

}
