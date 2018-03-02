import { Routes, RouterModule, provideRoutes } from "@angular/router";
import { SingupComponent } from "./unprotected/singup.component";
import { SinginComponent } from "./unprotected/singin.component";
import { ProtectedComponent } from "./protected/protected.component";
import { AuthGuard } from "./auth.guard";

const APP_ROUTES: Routes =[
    {path : '', redirectTo:'singup',pathMatch:'full'},
    {path : 'singup', component: SingupComponent},
    {path : 'singin', component: SinginComponent},
    // Dodajemo canActivate: [AuthGuard] da bi dodali yastitu na ovu rutu tj samo logovani korisnici mogu pristupiti
    {path : 'protected', component: ProtectedComponent, canActivate: [AuthGuard]},
    
];

export const routing = RouterModule.forRoot(APP_ROUTES);