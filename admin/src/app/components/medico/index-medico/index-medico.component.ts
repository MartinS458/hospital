import { Component, OnInit } from '@angular/core';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-index-medico',
  templateUrl: './index-medico.component.html',
  styleUrls: ['./index-medico.component.css']
})
export class IndexMedicoComponent implements OnInit {

  public medico : Array<any>=[];

  constructor(
    private _medicoService : MedicoService
  ) { }

  ngOnInit(): void {
   this._medicoService.listar_medico_filtro_admin().subscribe(
    response=>{
      
    this.medico = response.data;
    //console.log(this.medico);
    },
    error=>{
      console.log(error);
    }
    );
    
  }

}
