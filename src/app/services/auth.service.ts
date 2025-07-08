import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Router } from "@angular/router"
import { HeaderService } from "./header.service"
import { tap } from "rxjs/operators"
import { appSettings } from "src/environments/environment"
import { UserService } from "./user.service"

@Injectable({
     providedIn: "root",
})
export class AuthService {
     apiUrl = appSettings.apiUrl

     constructor(private http: HttpClient, private router: Router, private headers: HeaderService, private us: UserService) {}

     login(credentials: { username: string; password: string }): Observable<any> {
          return this.http.post<any>(`${this.apiUrl}/login/maintenance`, { ml: this.us.encryptPayload(credentials) }).pipe(
               tap((response) => {
                    if (response.token) {
                         this.us.setToken(response.token)
                    }
               })
          )
     }

     logout(): Observable<any> {
          return this.http.post<any>(`${this.apiUrl}/logout`, {}, { headers: this.headers.get() }).pipe(
               tap((response) => {
                    sessionStorage.clear()
                    this.router.navigate(["/login"])
               })
          )
     }
}
