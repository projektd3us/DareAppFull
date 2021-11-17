import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:5000/api";
  readonly PhotoUrl = "http://locahost:5000/api/Photos";

  constructor(private http:HttpClient) { }

  //DareType service
  getDareTypeList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/daretype');
  }

  getDareTypeById(id:any){
    return this.http.get<any>(this.APIUrl+'/daretype' + id);
  }
  
  addDareType(dareType:any){
    return this.http.post<any>(this.APIUrl+'/daretype', dareType);
  }

  updateDareType(dareType:any){
    return this.http.put<any>(this.APIUrl+'/daretype', dareType);
  }

  deleteDareType(id:any){
    return this.http.delete<any>(this.APIUrl+'/daretype' + id);
  }

  //Dare service
  getDareList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/dare');
  }
  
  addDare(dareType:any){
    return this.http.post<any>(this.APIUrl+'/dare', dareType);
  }

  updateDare(dareType:any){
    return this.http.put<any>(this.APIUrl+'/dare', dareType);
  }

  deleteDare(id:any){
    return this.http.delete<any>(this.APIUrl+'/dare' + id);
  }

  //extra
  GetAllDareTypeNames():Observable<any[]>{
    return this.http.delete<any>(this.APIUrl+'/daretype/GetAllDareTypeNames');
  }

}
