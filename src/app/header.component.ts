import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

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
              <ul class="nav navbar-nav navbar-right">
  
                  <li><a>Logout</a></li>
              </ul>
          </div><!-- /.container-fluid -->
  
      </nav>
  
  </header>
`
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
