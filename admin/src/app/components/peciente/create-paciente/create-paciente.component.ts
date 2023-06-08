import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { PacienteService } from 'src/app/services/paciente.service';
declare var iziToast:any;
@Component({
  selector: 'app-create-paciente',
  templateUrl: './create-paciente.component.html',
  styleUrls: ['./create-paciente.component.css']
})
export class CreatePacienteComponent implements OnInit {

  public paciente : any = {
    genero: ''
  };
  public token;

  constructor(
    private _pacienteService:PacienteService,
    private _adminService:AdminService,
    private _router : Router
  ) { 
    this.token = this._adminService.getToken();
  }

  ngOnInit(): void {
  }

  registro(registroForm:any){
     if(registroForm.valid){
console.log(this.paciente);
this._pacienteService.registro_paciente_admin(this.paciente,this.token).subscribe(
  response=>{
console.log(response);
iziToast.show({
        title: 'SUCCESS',
        titleColor: '#1DC74C',
        color: '#FFF',
        class: 'text-success',
        position: 'topRight',
        message: 'se registro correctamente el nuevo paciente.',        

      });
      this.paciente={
        genero:'',
        nombre:'',
        apellido:'',
        dni:'',
        email:'',
      }
      this._router.navigate(['/panel/paciente']);
  },
  error=>{
console.log(error);
  }
);
     }else{
      iziToast.show({
        title: 'ERROR',
        titleColor: '#FF0000',
        color: '#FFF',
        class: 'text-danger',
        position: 'topRight',
        message: 'Los datos del formulario no son validos',        

      });
     }

  }

}
