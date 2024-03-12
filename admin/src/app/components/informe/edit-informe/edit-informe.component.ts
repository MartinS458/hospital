import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { InformeService } from 'src/app/services/informe.service';

declare var iziToast:any;

@Component({
  selector: 'app-edit-informe',
  templateUrl: './edit-informe.component.html',
  styleUrls: ['./edit-informe.component.css']
})
export class EditInformeComponent implements OnInit {

  public informe:any = {};
  public id: any;
  public token:any;

  constructor(
    private _route : ActivatedRoute,
    private _informeService : InformeService,
    private _adminService : AdminService,
    private _router : Router
  ) { 
    this.token = this._adminService.getToken();
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{
        this.id = params['id'];
        this._informeService.obtener_informe_admin(this.id,this.token).subscribe(
          response=>{
          console.log(response);
          if(response.data == undefined){
            this.informe = undefined;
          }else{
            this.informe = response.data;
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
      this._informeService.actualizar_informe_admin(this.id,this.informe,this.token).subscribe(
        response=>{
          iziToast.show({
            title: 'SUCCESS',
            titleColor: '#1DC74C',
            color: '#FFF',
            class: 'text-success',
            position: 'topRight',
            message: 'se actualizo correctamente el nuevo informe.',        
    
          });
          this._router.navigate(['/panel/informe']);
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
