import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { GLOBAL } from "./GLOBAL";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  public url;

  constructor(
    private _http: HttpClient,
  ) {
    this.url = GLOBAL.url;
  }
  listar_medicamento_filtro_admin(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url+'listar_medicamento_filtro_admin',{headers:headers});

  }

  registro_medicamento_admin(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.post(this.url+'registro_medicamento_admin',data,{headers:headers});

  }
  obtener_medicamento_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url+'obtener_medicamento_admin/'+id,{headers:headers});

  }
  actualizar_medicamento_admin(id:any,data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.put(this.url+'actualizar_medicamento_admin/'+id,data,{headers:headers});

  }
  eliminar_medicamento_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.delete(this.url+'eliminar_medicamento_admin/'+id,{headers:headers});

  }
}
