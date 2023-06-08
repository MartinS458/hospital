import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { InicioComponent } from "./components/inicio/inicio.component";
import { LoginComponent } from "./components/login/login.component";
import { AdminGuard } from "./guards/admin.guard";
import { IndexMedicoComponent } from "./components/medico/index-medico/index-medico.component";
import { IndexPacienteComponent } from "./components/peciente/index-paciente/index-paciente.component";
import { IndexMedicamentoComponent } from "./components/medicamento/index-medicamento/index-medicamento.component";
import { IndexInformeComponent } from "./components/informe/index-informe/index-informe.component";
import { CreateMedicoComponent } from "./components/medico/create-medico/create-medico.component";
import { CreateInformeComponent } from "./components/informe/create-informe/create-informe.component";
import { CreateMedicamentoComponent } from "./components/medicamento/create-medicamento/create-medicamento.component";
import { EditMedicoComponent } from "./components/medico/edit-medico/edit-medico.component";
import { EditPacienteComponent } from "./components/peciente/edit-paciente/edit-paciente.component";
import { EditMedicamentoComponent } from "./components/medicamento/edit-medicamento/edit-medicamento.component";
import { CreatePacienteComponent } from "./components/peciente/create-paciente/create-paciente.component";
const appRoute : Routes = [ 
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: InicioComponent, canActivate:[AdminGuard]},
    {path: 'panel',children:[
        {path: 'medico', component: IndexMedicoComponent, canActivate:[AdminGuard]},
        {path: 'medico/registro', component: CreateMedicoComponent, canActivate: [AdminGuard]},
        {path: 'medico/:id', component: EditMedicoComponent, canActivate: [AdminGuard]},

        {path: 'paciente', component: IndexPacienteComponent, canActivate:[AdminGuard]},
        {path: 'paciente/registro', component: CreatePacienteComponent, canActivate: [AdminGuard]},
        {path: 'paciente/:id', component: EditPacienteComponent, canActivate: [AdminGuard]},

        {path: 'medicamento/registro', component: CreateMedicamentoComponent, canActivate: [AdminGuard]},
        {path: 'medicamento', component: IndexMedicamentoComponent, canActivate:[AdminGuard]},
        {path: 'medicamento/:id', component: EditMedicamentoComponent, canActivate: [AdminGuard]},

        {path: 'informe', component: IndexInformeComponent, canActivate:[AdminGuard]},
        {path: 'informe/registro', component: CreateInformeComponent, canActivate: [AdminGuard]},
    ] },
    {path: 'login', component: LoginComponent}
]
export const appRoutingProviders : any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute);