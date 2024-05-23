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




















  

  // // Add this method to the LockerService class
  // getNextLockerNumber(): number {
  //   // Find the maximum locker number in the lockers array
  //   const maxLockerNumber = Math.max(...this.lockers.map(locker => locker.lockerNumber));

  //   // Return the next available locker number
  //   return maxLockerNumber + 1;
  // }

  // getLocker(id: number): Observable<any> {
  //   const url = 'http://127.0.0.1:8000/api/getlocker/${id}';
  //   return this.http.get(url, { responseType: 'json' });
  // }
  
  // updateLocker(id: number, body: any): Observable<any> {
  //   const url = 'http://127.0.0.1:8000/api/updatelocker/${id}';
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.http.post(url, body, { headers, responseType: 'json' });
  // }

  // getLockerByLockerNumber(lockerNumber: number): Observable<Locker> {
  //   return this.http.get<Locker>('${this.apiUrl}/api/getlocker/${lockerNumber}');
  // }
  
  
  deleteLocker(id: number): Observable<any> {
    return this.http.delete('${this.apiUrl}/${id}');
  }
}