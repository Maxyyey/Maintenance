import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '@app/config/config';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  getInventories(){
    return this.http.get<any>(`${apiUrl}/inventory`)
  }
}
