import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { HeaderService } from './header.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
    private headers: HeaderService
  ) { }

  private baseurl:string = 'http://127.0.0.1:8000/api/';

  public get(url: string) {
    return this.http.get(this.baseurl+url);
  }

  public post(url: string,formData: FormData) {
    return this.http.post(this.baseurl+url, formData, { headers: this.headers.get() });
  }
}
