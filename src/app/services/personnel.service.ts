import { Injectable } from '@angular/core';
import { apiUrl } from '@app/config/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(private http: HttpClient) { }

  getPersonnels() {
    return this.http.get<any>(`${apiUrl}/personnels`)
  }

  getPersonnel(id:number) {
    return this.http.get<any>(`${apiUrl}/personnels/${id}`)
  }

}
