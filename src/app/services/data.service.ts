import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { HeaderService } from "./header.service"
import { appSettings } from "src/environments/environment"
import { UserService } from "./user.service"

@Injectable({
     providedIn: "root",
})
export class DataService {
     apiUrl = appSettings.apiUrl

     constructor(private http: HttpClient, private headers: HeaderService, private us: UserService) {}

     public get(endpoint: string, params: string = "") {
          return this.http.get<any>(this.apiUrl + endpoint + params)
     }

     public post(endpoint: string, params: string = '', payload: any = null) {
          console.log(payload)
          return this.http.post<any>(this.apiUrl + endpoint + params, this.processPayload(payload), { headers: this.headers.get() })
     }

     // Add PUT method
     public put(endpoint: string, params: string, payload: any) {
          return this.http.put(this.apiUrl + endpoint + params, this.processPayload(payload), { headers: this.headers.get() })
     }

     // Add DELETE method
     public delete(endpoint: string) {
          return this.http.delete(this.apiUrl + endpoint, { headers: this.headers.get() })
     }

     private processPayload(form: any) {
          if (form instanceof FormData) {
               const plain: any = {}
               const fileEntries: Record<string, File> = {}

               form.forEach((value, key) => {
                    if (value instanceof File) {
                         fileEntries[key] = value
                    } else {
                         plain[key] = value
                    }
               })

               const encrypted = this.us.encryptPayload(plain)

               const finalForm = new FormData()
               finalForm.append("ml", encrypted)

               for (const key in fileEntries) {
                    finalForm.append(key, fileEntries[key])
               }

               return finalForm
          } else {
               return { ml: this.us.encryptPayload(form)}
          }
     }
}
