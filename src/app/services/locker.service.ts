import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appSettings } from 'src/environments/environment';

export interface Locker {
  lockerNumber: number;
  status: string;
  date: string;
  id: number;
  created_at: Date;
}

@Injectable({
  providedIn: 'root'
  
})
export class LockerService {
  apiUrl = appSettings.apiUrl
  private lockers: Locker[] = [];

  constructor(private http: HttpClient) { }

  getLockers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/maintenance/lockers/`);
  }

  getStartingLockerNumber() {
    return this.http.get(`${this.apiUrl}/maintenance/lockers/latest`);
  }

  addLocker(numberOfLockers: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/maintenance/lockers/`, numberOfLockers);
  }

  getLocker(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/maintenance/lockers/${id}`);
  }

  updateLocker(data: any, id:number): Observable<any> {
    return this.http.post(`${this.apiUrl}/maintenance/lockers/${id}`, data);
  }
  
  deleteLocker(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/maintenance/lockers/delete/${id}`, {});
  }

  getHistory() {
    return this.http.get(`${this.apiUrl}/maintenance/lockers/logs`);
  }
}