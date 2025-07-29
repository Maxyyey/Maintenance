import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"
import { appSettings } from "src/environments/environment"
import { DataService } from "./data.service"

export interface Locker {
     lockerNumber: number
     status: string
     date: string
     id: number
     created_at: Date
}

@Injectable({
     providedIn: "root",
})
export class LockerService {
     apiUrl = appSettings.apiUrl
     private lockers: Locker[] = []

     constructor(private http: HttpClient, private ds: DataService) {}

     getLockers(): Observable<any> {
          return this.http.get(`${this.apiUrl}/maintenance/lockers/`)
     }

     getStartingLockerNumber() {
          return this.http.get(`${this.apiUrl}/maintenance/lockers/latest`)
     }

     getLocker(id: number): Observable<any> {
          return this.http.get(`${this.apiUrl}/maintenance/lockers/${id}`)
     }

     addLocker(numberOfLockers: any): Observable<any> {
          return this.ds.post("/maintenance/lockers", "", numberOfLockers)
     }

     updateLocker(data: any, id: number): Observable<any> {
          return this.ds.post(`/maintenance/lockers/${id}`, "", data)
     }

     // deleteLocker(id: number): Observable<any> {
     //      return this.ds.post(`/maintenance/lockers/delete/${id}`, "", {})
     // }

     getHistory() {
          return this.http.get(`${this.apiUrl}/maintenance/lockers/logs`)
     }
}
