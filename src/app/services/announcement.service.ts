import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '@app/config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http: HttpClient) { }
  getAnnouncements() {
    return this.http.get<any>(`${apiUrl}/announcements`)
  }

  getAnnouncement(id:number) {
    return this.http.get<any>(`${apiUrl}/announcements/${id}`)
  }

  
  createAnnouncement(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/announcements`, data);
  } 

  updateAnnouncement(announcementId: string, data: any): Observable<any> {
    return this.http.put (`${apiUrl}/announcements/`, data);
  } 
}
