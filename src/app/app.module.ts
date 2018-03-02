import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


import { SinginComponent } from './unprotected/singin.component';
import { SingupComponent } from './unprotected/singup.component';
import { ProtectedComponent } from './protected/protected.component';
import { HeaderComponent } from './header.component';
import {RouterModule, Router} from '@angular/router';
import { routing } from './app.routes';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,


    SinginComponent,
    SingupComponent,
    ProtectedComponent,
    HeaderComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
  
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
