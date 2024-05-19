import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '@app/config/config';
import { NumberValueAccessor } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(private http: HttpClient) { }

  async getPersonnels(){
    const data = await this.http.get(`${apiUrl}/personnels`).toPromise()
    return data;
  }

  getPersonnel(id: number){
    return this.http.get<any>(`${apiUrl}/personnels/${id}`)
  }

  createPersonnel(data: any){
    return this.http.post<any>(`${apiUrl}/personnels`, data)
  }

  updatePersonnel(id:number, data: any){
    return this.http.post<any>(`${apiUrl}/personnels/${id}`, data)
  }

  deletePersonnel(id:number){
    return this.http.delete(`${apiUrl}/personnels/${id}`)
  }
}
//up