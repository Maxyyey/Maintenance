import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';
import { tap } from 'rxjs/operators';
import { appSettings } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = appSettings.apiUrl

  constructor(private http: HttpClient, private router: Router, private headers: HeaderService) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login/maintenance`, credentials).pipe(
      tap(response => {
        if (response.token) {
          sessionStorage.setItem('token', response.token);
        }
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/logout`, {}, { headers: this.headers.get() }).pipe(
      tap(response => {
        sessionStorage.clear();
        this.router.navigate(['/login']);
      })
    );
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }
}