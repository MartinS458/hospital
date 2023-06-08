import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MedicamentoService } from 'src/app/services/medicamento.service';
declare var iziToast:any;
@Component({
  selector: 'app-create-medicamento',
  templateUrl: './create-medicamento.component.html',
  styleUrls: ['./create-medicamento.component.css']
})
export class CreateMedicamentoComponent implements OnInit {

  public medicamento : any = {
    genero: ''
  };
  public token;

  constructor(
    private _medicamentoService:MedicamentoService,
    private _adminService:AdminService,
    private _router : Router
  ) { 
    this.token = this._adminService.getToken();
  }

  ngOnInit(): void {
  }

  registro(registroForm:any){
     if(registroForm.valid){
console.log(this.medicamento);
this._medicamentoService.registro_medicamento_admin(this.medicamento,this.token).subscribe(
  response=>{
console.log(response);
iziToast.show({
        title: 'SUCCESS',
        titleColor: '#1DC74C',
        color: '#FFF',
        class: 'text-success',
        position: 'topRight',
        message: 'se registro correctamente el nuevo medicamento.',        

      });
      this.medicamento={
      
        producto:'',
        descripcion:'',
        precioTotal:'',
        
      }
      this._router.navigate(['/panel/medicamento']);
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
