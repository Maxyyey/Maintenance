import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { appSettings } from "src/environments/environment"
import { DataService } from "./data.service"

@Injectable({
     providedIn: "root",
})
export class AnnouncementService {
     apiUrl = appSettings.apiUrl

     constructor(private http: HttpClient, private ds: DataService) {}
     
     getAnnouncements() {
          return this.http.get<any>(`${this.apiUrl}/announcements`)
     }

     getAnnouncement(id: number) {
          return this.http.get<any>(`${this.apiUrl}/announcements/${id}`)
     }

     createAnnouncement(data: any): Observable<any> {
          return this.ds.post("/announcements", "", data)
     }

     updateAnnouncement(id: string, data: any): Observable<any> {
          return this.ds.post(`/announcements/${id}`, "", data)
     }
}
