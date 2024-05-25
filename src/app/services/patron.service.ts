import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '@app/config/config';

@Injectable({
  providedIn: 'root'
})
export class PatronService {

  constructor(private http: HttpClient,) { }

  getPatrons() {
    return this.http.get<any>(`${apiUrl}/patrons`);
  }

  getPatron(id:number) {
    return this.http.get(`${apiUrl}/patrons/${id}`);
  }

  updatePatron(id:number, data: any) {
    return this.http.post(`${apiUrl}/patrons/${id}`, data);
  }
}
