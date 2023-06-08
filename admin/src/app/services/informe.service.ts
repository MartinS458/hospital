import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { GLOBAL } from "./GLOBAL";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class InformeService {

  public url;

  constructor(
    private _http: HttpClient,
  ) {
    this.url = GLOBAL.url;
  }
  listar_informe_filtro_admin(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url+'listar_informe_filtro_admin',{headers:headers});

  }

  registro_informe_admin(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.post(this.url+'registro_informe_admin',data,{headers:headers});

  }
  obtener_informe_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url+'obtener_informe_admin/'+id,{headers:headers});

  }
  actualizar_informe_admin(id:any,data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.put(this.url+'actualizar_informe_admin/'+id,data,{headers:headers});

  }
  eliminar_informe_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.delete(this.url+'eliminar_informe_admin/'+id,{headers:headers});

  }
}
