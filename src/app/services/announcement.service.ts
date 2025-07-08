import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appSettings } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  apiUrl = appSettings.apiUrl

  constructor(private http: HttpClient) { }
  getAnnouncements() {
    return this.http.get<any>(`${this.apiUrl}/announcements`)
  }

  getAnnouncement(id:number) {
    return this.http.get<any>(`${this.apiUrl}/announcements/${id}`)
  }
  
  createAnnouncement(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/announcements`, data );
  } 

  updateAnnouncement(id: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/announcements/${id}`, data);
  } 

  archiveAnnouncement(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/announcements/${id}`);
  } 
}
