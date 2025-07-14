import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Router } from "@angular/router"
import { tap } from "rxjs/operators"
import { appSettings } from "src/environments/environment"
import { UserService } from "./user.service"
import { DataService } from "./data.service"

@Injectable({
     providedIn: "root",
})
export class AuthService {
     apiUrl = appSettings.apiUrl

     constructor(private http: HttpClient, private router: Router, private ds: DataService, private us: UserService) {}

     login(credentials: { username: string; password: string }): Observable<any> {
          return this.ds.post(`/login/maintenance`, '', credentials).pipe(
               tap((response) => {
                    if (response.token) {
                         this.us.setToken(response.token)
                    }
               })
          )
     }

     logout(): Observable<any> {
          return this.ds.post(`/logout`).pipe(
               tap((response) => {
                    sessionStorage.clear()
                    this.router.navigate(["/login"])
               })
          )
     }
}
