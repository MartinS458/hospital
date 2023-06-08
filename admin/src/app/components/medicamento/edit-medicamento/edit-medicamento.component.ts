import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MedicamentoService } from 'src/app/services/medicamento.service';

declare var iziToast:any;

@Component({
  selector: 'app-edit-medicamento',
  templateUrl: './edit-medicamento.component.html',
  styleUrls: ['./edit-medicamento.component.css']
})
export class EditMedicamentoComponent implements OnInit {

  public medicamento:any = {};
  public id: any;
  public token:any;

  constructor(
    private _route : ActivatedRoute,
    private _medicamentoService : MedicamentoService,
    private _adminService : AdminService,
    private _router : Router
  ) { 
    this.token = this._adminService.getToken();
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{
        this.id = params['id'];
        this._medicamentoService.obtener_medicamento_admin(this.id,this.token).subscribe(
          response=>{
          console.log(response);
          if(response.data == undefined){
            this.medicamento = undefined;
          }else{
            this.medicamento = response.data;
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
      this._medicamentoService.actualizar_medicamento_admin(this.id,this.medicamento,this.token).subscribe(
        response=>{
          iziToast.show({
            title: 'SUCCESS',
            titleColor: '#1DC74C',
            color: '#FFF',
            class: 'text-success',
            position: 'topRight',
            message: 'se actualizo correctamente el nuevo medicamento.',        
    
          });
          this._router.navigate(['/panel/medicamento']);
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
