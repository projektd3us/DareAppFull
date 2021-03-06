import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getNewDareTypeId():Observable<any>{
    return this.http.get<any>(this.APIUrl+'/daretype/GetNewDareTypeId');
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
    return this.http.delete<any>(this.APIUrl+'/dare', id);
  }

  //extra
  GetAllDareTypeNames():Observable<any[]>{
    return this.http.delete<any>(this.APIUrl+'/daretype/GetAllDareTypeNames');
  }

  getNewDareId():Observable<any>{
    return this.http.get<any>(this.APIUrl+'/dare/GetNewDareId');
  }
  
  //user login


  //user actions
  // next(dareTypeName: any, username: any):Observable<any>{ //tbd
  //   return this.http.post<any>(this.APIUrl + '/useractions/next/', dareTypeName, username);
  // }

  next(dareTypeName: any, username: any):Observable<any>{ //tbd
    return this.http.get<any>(this.APIUrl + `/useractions/next?dareTypeName=${dareTypeName}&username=${username}`);
  }

  updateGamesPlayed(username: any): Observable<any>{
    return this.http.get<any>(this.APIUrl + `/useractions/gamesplayed?username=${username}`);
  }

  getUserDetails(username: any): Observable<any>{
    return this.http.get<any>(this.APIUrl + `/useractions/userdetails?username=${username}`);
  }

}
