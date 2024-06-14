import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { InformeService } from 'src/app/services/informe.service';

declare var iziToast:any;
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-index-informe',
  templateUrl: './index-informe.component.html',
  styleUrls: ['./index-informe.component.css']
})
export class IndexInformeComponent implements OnInit {

  public informe : Array<any>=[];
  public token;
  // public page = 1;
  // public pageSize = 1;
  public filtro_medico = '';
  public filtro_paciente = '';

  constructor(
    private _informeService : InformeService,
    private _adminService : AdminService
  ) { 
    this.token = this._adminService.getToken();
    
  }

  ngOnInit(): void {
     this.init_Data();
  }

  init_Data(){
    this._informeService.listar_informe_filtro_admin(null,null).subscribe(
      response=>{
        
      this.informe = response.data;
      console.log(this.informe);
      },
      error=>{
        console.log(error);
      }
      );
  }
 
filtro(tipo:any){
 
  if(tipo == 'medico'){
   if(this.filtro_medico){
    this._informeService.listar_informe_filtro_admin(tipo,this.filtro_medico).subscribe(
      response=>{
        
      this.informe = response.data;
      
      },
      error=>{
        console.log(error);
      }
      );
   }else{
    this.init_Data();
   }
  }else if(tipo == 'paciente'){
    if(this.filtro_paciente){
      this._informeService.listar_informe_filtro_admin(tipo,this.filtro_paciente).subscribe(
        response=>{
          
        this.informe = response.data;
        
        },
        error=>{
          console.log(error);
        }
        );
    }else{
      this.init_Data();
    }
  }
}
eliminar(id:any){
  this._informeService.eliminar_informe_admin(id,this.token).subscribe(
    response=>{
      iziToast.show({
        title: 'SUCCESS',
        titleColor: '#1DC74C',
        color: '#FFF',
        class: 'text-success',
        position: 'topRight',
        message: 'se elimino correctamente el nuevo informe.',        

      });
      $('#delete-'+id).modal('hide');
      $('.modal-backdrop').removeClass('show');
      this.ngOnInit();
    },
    error=>{
      console.log(error);
    }
  )
}
}
