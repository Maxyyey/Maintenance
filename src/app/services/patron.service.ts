import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appSettings } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatronService {
  apiUrl = appSettings.apiUrl

  constructor(private http: HttpClient,) { }

  getPatrons() {
    return this.http.get<any>(`${this.apiUrl}/patrons`);
  }

  getPatron(id:number) {
    return this.http.get(`${this.apiUrl}/patrons/${id}`);
  }

  updatePatron(id:number, data: any) {
    return this.http.post(`${this.apiUrl}/patrons/${id}`, data);
  }
}
