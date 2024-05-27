import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { apiUrl } from '@app/config/config';

@Injectable({
  providedIn: 'root'
})
export class CatalogingService {

  constructor(
    private http: HttpClient
  ) { }

  public getLocations() {
    return this.http.get(`${apiUrl}/locations`)
  }

  public createLocations(data: any) {
    return this.http.post(`${apiUrl}/locations`, data)
  }

  getDepartments() {
    return this.http.get<any>(`${apiUrl}/departments`)
  }

  getPrograms(id: number) {
    return this.http.get<any>(`http://localhost:8000/api/view/${id}`)
  }
}
