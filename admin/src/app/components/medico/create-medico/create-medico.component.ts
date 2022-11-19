import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MedicoService } from 'src/app/services/medico.service';
declare var iziToast:any;
@Component({
  selector: 'app-create-medico',
  templateUrl: './create-medico.component.html',
  styleUrls: ['./create-medico.component.css']
})
export class CreateMedicoComponent implements OnInit {

  public medico : any = {
    genero: ''
  };
  public token;

  constructor(
    private _medicoService:MedicoService,
    private _adminService:AdminService,
    private _router : Router
  ) { 
    this.token = this._adminService.getToken
  }

  ngOnInit(): void {
  }

  registro(registroForm:any){
     if(registroForm.valid){
console.log(this.medico);
this._medicoService.registro_medico_admin(this.medico,this.token).subscribe(
  response=>{
console.log(response);
iziToast.show({
        title: 'SUCCESS',
        titleColor: '#1DC74C',
        color: '#FFF',
        class: 'text-success',
        position: 'topRight',
        message: 'se registro correctamente el nuevo medico.',        

      });
      this.medico={
        genero:'',
        nombres:'',
        apellidos:'',
        dni:'',
        email:''
      }
      this._router.navigate(['/panel/medico']);
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
