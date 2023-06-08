import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { PacienteService } from 'src/app/services/paciente.service';

declare var iziToast:any;

@Component({
  selector: 'app-edit-paciente',
  templateUrl: './edit-paciente.component.html',
  styleUrls: ['./edit-paciente.component.css']
})
export class EditPacienteComponent implements OnInit {

  public paciente:any = {};
  public id: any;
  public token:any;

  constructor(
    private _route : ActivatedRoute,
    private _pacienteService : PacienteService,
    private _adminService : AdminService,
    private _router : Router
  ) { 
    this.token = this._adminService.getToken();
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{
        this.id = params['id'];
        this._pacienteService.obtener_paciente_admin(this.id,this.token).subscribe(
          response=>{
          console.log(response);
          if(response.data == undefined){
            this.paciente = undefined;
          }else{
            this.paciente = response.data;
          }
          }, 
          error=>{

          }
        );
      
      }
    )
  }

  actualizar(updateForm:any){
    if(updateForm.valid){
      this._pacienteService.actualizar_paciente_admin(this.id,this.paciente,this.token).subscribe(
        response=>{
          iziToast.show({
            title: 'SUCCESS',
            titleColor: '#1DC74C',
            color: '#FFF',
            class: 'text-success',
            position: 'topRight',
            message: 'se actualizo correctamente el nuevo paciente.',        
    
          });
          this._router.navigate(['/panel/paciente']);
        }, error=>{
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
