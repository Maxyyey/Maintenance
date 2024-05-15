import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '@app/config/config';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http: HttpClient) { }
  getAnnouncements() {
    return this.http.get<any>(`${apiUrl}/announcements`)
  }

  // getPersonnel(id:number) {
  //   return this.http.get<any>(`${apiUrl}/personnels/${id}`)
  // }
}
