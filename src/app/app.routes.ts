import { Routes, RouterModule, provideRoutes } from "@angular/router";
import { SingupComponent } from "./unprotected/singup.component";
import { SinginComponent } from "./unprotected/singin.component";
import { ProtectedComponent } from "./protected/protected.component";

const APP_ROUTES: Routes =[
    {path : ' ', redirectTo:'/signup',pathMatch:'full'},
    {path : 'singup', component: SingupComponent},
    {path : 'singin', component: SinginComponent},
    {path : 'protected', component: ProtectedComponent},

    
   

    
];

export const routing = RouterModule.forRoot(APP_ROUTES);