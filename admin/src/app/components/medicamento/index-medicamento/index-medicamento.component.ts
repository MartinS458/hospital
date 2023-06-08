import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { MedicamentoService } from 'src/app/services/medicamento.service';

declare var iziToast:any;
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-index-medicamento',
  templateUrl: './index-medicamento.component.html',
  styleUrls: ['./index-medicamento.component.css']
})
export class IndexMedicamentoComponent implements OnInit {

  public medicamento : Array<any>=[];
  public token;
  // public page = 1;
  // public pageSize = 1;
  // public filtro_apellidos = '';
  // public filtro_correo = '';

  constructor(
    private _medicamentoService : MedicamentoService,
    private _adminService : AdminService
  ) { 
    this.token = this._adminService.getToken();
    
  }

  ngOnInit(): void {
   this._medicamentoService.listar_medicamento_filtro_admin(this.token).subscribe(
    response=>{
      
    this.medicamento = response.data;
    //console.log(this.medicamento);
    },
    error=>{
      console.log(error);
    }
    );
    
  }
 
// filtro(tipo:any){
 
//   if(tipo == 'apellidos'){
//     this._medicamentoService.listar_medicamento_filtro_admin(tipo,this.filtro_apellidos).subscribe(
//       response=>{
        
//       this.medicamento = response.data;
//       //console.log(this.medicamento);
//       },
//       error=>{
//         console.log(error);
//       }
//       );
//   }else if(tipo == 'correo'){
//     this._medicamentoService.listar_medicamento_filtro_admin(tipo,this.filtro_correo).subscribe(
//       response=>{
        
//       this.medicamento = response.data;
//       console.log(this.medicamento);
//       },
//       error=>{
//         console.log(error);
//       }
//       );
  
//   }
// }
eliminar(id:any){
  this._medicamentoService.eliminar_medicamento_admin(id,this.token).subscribe(
    response=>{
      iziToast.show({
        title: 'SUCCESS',
        titleColor: '#1DC74C',
        color: '#FFF',
        class: 'text-success',
        position: 'topRight',
        message: 'se elimino correctamente el nuevo medicamento.',        

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
