import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-index-medico',
  templateUrl: './index-medico.component.html',
  styleUrls: ['./index-medico.component.css']
})
export class IndexMedicoComponent implements OnInit {

  public medico : Array<any>=[];
  public token;
  // public page = 1;
  // public pageSize = 1;
  // public filtro_apellidos = '';
  // public filtro_correo = '';

  constructor(
    private _medicoService : MedicoService,
    private _adminService : AdminService
  ) { 
    this.token = this._adminService.getToken();
    
  }

  ngOnInit(): void {
   this._medicoService.listar_medico_filtro_admin(this.token).subscribe(
    response=>{
      
    this.medico = response.data;
    //console.log(this.medico);
    },
    error=>{
      console.log(error);
    }
    );
    
  }
 
// filtro(tipo:any){
 
//   if(tipo == 'apellidos'){
//     this._medicoService.listar_medico_filtro_admin(tipo,this.filtro_apellidos).subscribe(
//       response=>{
        
//       this.medico = response.data;
//       //console.log(this.medico);
//       },
//       error=>{
//         console.log(error);
//       }
//       );
//   }else if(tipo == 'correo'){
//     this._medicoService.listar_medico_filtro_admin(tipo,this.filtro_correo).subscribe(
//       response=>{
        
//       this.medico = response.data;
//       console.log(this.medico);
//       },
//       error=>{
//         console.log(error);
//       }
//       );
  
//   }
// }
}
