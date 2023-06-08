import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { InformeService } from 'src/app/services/informe.service';
import { HttpClient } from '@angular/common/http';
declare var iziToast: any;

@Component({
  selector: 'app-create-informe',
  templateUrl: './create-informe.component.html',
  styleUrls: ['./create-informe.component.css']
})
export class CreateInformeComponent implements OnInit {
  public informe: any = {
    medico: '',
  };
  public token: string;
  public medico: string[] = [];
  public id: string = '';
  public selectedMedico: string = '';

  constructor(
    private _informeService: InformeService,
    private _adminService: AdminService,
    private _router: Router,
    private http: HttpClient,
  ) {
    this.token = this._adminService.getToken() || '';
  }

  ngOnInit(): void {
    this.obtenerDatosMedico();
  }

  obtenerDatosMedico() {
    this.http.get<string[]>('/api/medico').subscribe(
      (response: string[] | null) => {
        this.medico = response ?? [];
      },
      (error) => {
        console.error('Error al obtener los datos de los médicos:', error);
      }
    );
  }

  registro(registroForm: any) {
    if (registroForm.valid) {
      console.log(this.informe);
      this._informeService.registro_informe_admin(this.informe, this.token).subscribe(
        (response) => {
          console.log(response);
          iziToast.show({
            title: 'SUCCESS',
            titleColor: '#1DC74C',
            color: '#FFF',
            class: 'text-success',
            position: 'topRight',
            message: 'Se registró correctamente el nuevo informe.',
          });
          this.informe = {
            medico: '',
          };
          this._router.navigate(['/panel/informe']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      iziToast.show({
        title: 'ERROR',
        titleColor: '#FF0000',
        color: '#FFF',
        class: 'text-danger',
        position: 'topRight',
        message: 'Los datos del formulario no son válidos',
      });
    }
  }
}
