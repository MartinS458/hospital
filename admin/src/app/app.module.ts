import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { InicioComponent } from './components/inicio/inicio.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { IndexMedicoComponent } from './components/medico/index-medico/index-medico.component';
import { IndexPacienteComponent } from './components/peciente/index-paciente/index-paciente.component';
import { IndexMedicamentoComponent } from './components/medicamento/index-medicamento/index-medicamento.component';
import { IndexInformeComponent } from './components/informe/index-informe/index-informe.component';
import { CreateMedicoComponent } from './components/medico/create-medico/create-medico.component';
import { CreateMedicamentoComponent } from './components/medicamento/create-medicamento/create-medicamento.component';
import { CreateInformeComponent } from './components/informe/create-informe/create-informe.component';
import { EditMedicoComponent } from './components/medico/edit-medico/edit-medico.component';
import { EditMedicamentoComponent } from './components/medicamento/edit-medicamento/edit-medicamento.component';
import { EditPacienteComponent } from './components/peciente/edit-paciente/edit-paciente.component';
import { CreatePacienteComponent } from './components/peciente/create-paciente/create-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SidebarComponent,
    LoginComponent,
    IndexMedicoComponent,
    IndexPacienteComponent,
    IndexMedicamentoComponent,
    CreateMedicoComponent,
    CreateMedicamentoComponent,
    CreateInformeComponent,
    EditMedicoComponent,
    EditMedicamentoComponent,
    CreatePacienteComponent,
    EditPacienteComponent,
    IndexInformeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    
    HttpClientModule,
    routing,
    NgbPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
