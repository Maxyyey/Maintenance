import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NumberValueAccessor } from '@angular/forms';
import { appSettings } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PersonnelService {
  apiUrl = appSettings.apiUrl

  constructor(private http: HttpClient) { }

  getPersonnels(){
    return this.http.get<any>(`${this.apiUrl}/personnels`)
  }

  getPersonnel(id: number){
    return this.http.get<any>(`${this.apiUrl}/personnels/${id}`)
  }

  createPersonnel(data: any){
    return this.http.post<any>(`${this.apiUrl}/personnels`, data)
  }

  updatePersonnel(id:number, data: any){
    return this.http.post<any>(`${this.apiUrl}/personnels/${id}`, data)
  }

  deletePersonnel(id:number){
    return this.http.delete(`${this.apiUrl}/personnels/${id}`)
  }
}