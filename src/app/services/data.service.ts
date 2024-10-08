import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '@app/config/config';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
    private headers: HeaderService
  ) { }

  public get(endpoint: string, params: string = '') {
    return this.http.get<any>(apiUrl + endpoint + params);
  }

  public post(endpoint: string, params: string, payload: FormData) {
    return this.http.post(apiUrl + endpoint + params, payload, { headers: this.headers.get() });
  }

  // Add PUT method
  public put(endpoint: string, params: string, payload: any) {
    return this.http.put(apiUrl + endpoint + params, payload, { headers: this.headers.get() });
  }

  // Add DELETE method
  public delete(endpoint: string) {
    return this.http.delete(apiUrl + endpoint, { headers: this.headers.get() });
  }
}
