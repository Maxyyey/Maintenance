import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appSettings } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  apiUrl = appSettings.apiUrl

  constructor(private http: HttpClient) { }

  getInventories(){
    return this.http.get<any>(`${this.apiUrl}/inventory`)
  }

  getBookInventories(filter: number = 1){
    return this.http.get<any>(`${this.apiUrl}/inventory/books/${filter}`)
  }

  searchBookInventories(filter: number = 0, search: string){
    return this.http.get<any>(`${this.apiUrl}/inventory/books/search/${filter}?search=${search}`)
  }

  updateBookInventoryStatus(forms: any, id:number) {
    return this.http.post<any>(`${this.apiUrl}/inventory/books/${id}`, forms)
  }

  clearBookInventoryStatus() {
    return this.http.get<any>(`${this.apiUrl}/inventory/books/clear`)
  }
}
