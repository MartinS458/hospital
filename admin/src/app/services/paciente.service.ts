import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { GLOBAL } from "./GLOBAL";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  public url;

  constructor(
    private _http: HttpClient,
  ) {
    this.url = GLOBAL.url;
  }
  listar_paciente_filtro_admin(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url+'listar_paciente_filtro_admin',{headers:headers});

  }

  registro_paciente_admin(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.post(this.url+'registro_paciente_admin',data,{headers:headers});

  }
  obtener_paciente_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url+'obtener_paciente_admin/'+id,{headers:headers});

  }
  actualizar_paciente_admin(id:any,data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.put(this.url+'actualizar_paciente_admin/'+id,data,{headers:headers});

  }
  eliminar_paciente_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.delete(this.url+'eliminar_paciente_admin/'+id,{headers:headers});

  }
}
