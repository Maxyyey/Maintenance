import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from '@app/config/config';

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
  private lockers: Locker[] = [];

  constructor(private http: HttpClient) { }

  getLockers(): Observable<any> {
    return this.http.get(`${apiUrl}/lockers/`);
  }

  getStartingLockerNumber() {
    return this.http.get(`${apiUrl}/lockers/latest`);
  }

  addLocker(numberOfLockers: any): Observable<any> {
    return this.http.post(`${apiUrl}/lockers/`, numberOfLockers);
  }

  getLocker(id:number): Observable<any> {
    return this.http.get(`${apiUrl}/lockers/${id}`);
  }

  updateLocker(data: any, id:number): Observable<any> {
    return this.http.post(`${apiUrl}/lockers/${id}`, data);
  }
  
  deleteLocker(id: number): Observable<any> {
    return this.http.get(`${apiUrl}/lockers/delete/${id}`);
  }
}