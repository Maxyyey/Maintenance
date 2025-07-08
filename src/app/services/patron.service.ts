import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { appSettings } from "src/environments/environment"
import { DataService } from "./data.service"

@Injectable({
     providedIn: "root",
})
export class PatronService {
     apiUrl = appSettings.apiUrl

     constructor(private http: HttpClient, private ds: DataService) {}

     getPatrons() {
          return this.http.get<any>(`${this.apiUrl}/patrons`)
     }

     getPatron(id: number) {
          return this.http.get(`${this.apiUrl}/patrons/${id}`)
     }

     updatePatron(id: number, data: any) {
          return this.ds.post(`/patrons/${id}`, "", data)
     }
}
