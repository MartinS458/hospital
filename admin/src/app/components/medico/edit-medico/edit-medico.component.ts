import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MedicoService } from 'src/app/services/medico.service';

declare var iziToast:any;

@Component({
  selector: 'app-edit-medico',
  templateUrl: './edit-medico.component.html',
  styleUrls: ['./edit-medico.component.css']
})
export class EditMedicoComponent implements OnInit {

  public medico:any = {};
  public id: any;
  public token:any;

  constructor(
    private _route : ActivatedRoute,
    private _medicoService : MedicoService,
    private _adminService : AdminService,
    private _router : Router
  ) { 
    this.token = this._adminService.getToken();
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{
        this.id = params['id'];
        this._medicoService.obtener_medico_admin(this.id,this.token).subscribe(
          response=>{
          console.log(response);
          if(response.data == undefined){
            this.medico = undefined;
          }else{
            this.medico = response.data;
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
      this._medicoService.actualizar_medico_admin(this.id,this.medico,this.token).subscribe(
        response=>{
          iziToast.show({
            title: 'SUCCESS',
            titleColor: '#1DC74C',
            color: '#FFF',
            class: 'text-success',
            position: 'topRight',
            message: 'se actualizo correctamente el nuevo medico.',        
    
          });
          this._router.navigate(['/panel/medico']);
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
