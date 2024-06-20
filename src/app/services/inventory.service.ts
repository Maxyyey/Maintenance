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

  getBookInventories(filter: number = 0){
    return this.http.get<any>(`${apiUrl}/inventory/books/${filter}`)
  }

  searchBookInventories(filter: number = 0, search: string){
    return this.http.get<any>(`${apiUrl}/inventory/books/search/${filter}?search=${search}`)
  }

  updateBookInventoryStatus(forms: any, id:number) {
    return this.http.post<any>(`${apiUrl}/inventory/books/${id}`, forms)
  }

  clearBookInventoryStatus() {
    return this.http.get<any>(`${apiUrl}/inventory/books/clear`)
  }
}
