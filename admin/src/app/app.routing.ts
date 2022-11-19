import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { InicioComponent } from "./components/inicio/inicio.component";
import { LoginComponent } from "./components/login/login.component";
import { AdminGuard } from "./guards/admin.guard";
import { IndexMedicoComponent } from "./components/medico/index-medico/index-medico.component";
import { CreateMedicoComponent } from "./components/medico/create-medico/create-medico.component";
const appRoute : Routes = [ 
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: InicioComponent, canActivate:[AdminGuard]},
    {path: 'panel',children:[
        {path: 'medico', component: IndexMedicoComponent, canActivate:[AdminGuard]},
        {path: 'medico/registro', component: CreateMedicoComponent, canActivate: [AdminGuard]},
    ] },
    {path: 'login', component: LoginComponent}
]
export const appRoutingProviders : any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute);