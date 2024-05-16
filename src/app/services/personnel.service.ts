import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '@app/config/config';
@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(private http: HttpClient) { }

  async getPersonnels(){
    const data = await this.http.get(`${apiUrl}/personnels`).toPromise()
    return data;
  }
}
//up
