import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { PacienteService } from 'src/app/services/paciente.service';

declare var iziToast:any;
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-index-paciente',
  templateUrl: './index-paciente.component.html',
  styleUrls: ['./index-paciente.component.css']
})
export class IndexPacienteComponent implements OnInit {

  public paciente : Array<any>=[];
  public token;
  // public page = 1;
  // public pageSize = 1;
  // public filtro_apellidos = '';
  // public filtro_correo = '';

  constructor(
    private _pacienteService : PacienteService,
    private _adminService : AdminService
  ) { 
    this.token = this._adminService.getToken();
    
  }

  ngOnInit(): void {
   this._pacienteService.listar_paciente_filtro_admin(this.token).subscribe(
    response=>{
      
    this.paciente = response.data;
    //console.log(this.paciente);
    },
    error=>{
      console.log(error);
    }
    );
    
  }
 
// filtro(tipo:any){
 
//   if(tipo == 'apellidos'){
//     this._pacienteService.listar_paciente_filtro_admin(tipo,this.filtro_apellidos).subscribe(
//       response=>{
        
//       this.paciente = response.data;
//       //console.log(this.paciente);
//       },
//       error=>{
//         console.log(error);
//       }
//       );
//   }else if(tipo == 'correo'){
//     this._pacienteService.listar_paciente_filtro_admin(tipo,this.filtro_correo).subscribe(
//       response=>{
        
//       this.paciente = response.data;
//       console.log(this.paciente);
//       },
//       error=>{
//         console.log(error);
//       }
//       );
  
//   }
// }
eliminar(id:any){
  this._pacienteService.eliminar_paciente_admin(id,this.token).subscribe(
    response=>{
      iziToast.show({
        title: 'SUCCESS',
        titleColor: '#1DC74C',
        color: '#FFF',
        class: 'text-success',
        position: 'topRight',
        message: 'se elimino correctamente el nuevo paciente.',        

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
