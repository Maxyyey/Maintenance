import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appSettings } from 'src/environments/environment';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private apiUrl = appSettings.apiUrl;

  constructor(
    private http: HttpClient,
    private ds: DataService
  ) {}

  getInventories() {
    return this.http.get<any>(`${this.apiUrl}/inventory`);
  }

  getBookInventories(filter: number = 1) {
    return this.http.get<any>(`${this.apiUrl}/inventory/books/${filter}`);
  }

  searchBookInventories(filter: number = 0, search: string) {
    return this.http.get<any>(
      `${this.apiUrl}/inventory/books/search/${filter}?search=${encodeURIComponent(search)}`
    );
  }

  updateBookInventoryStatus(forms: any, id: number) {
    return this.ds.post(`/inventory/books/${id}`, '', forms);
  }

  clearBookInventoryStatus() {
    return this.http.get<any>(`${this.apiUrl}/inventory/books/clear`);
  }

   archiveMultipleInventories(ids: number[]) {
    return this.ds.post(`/inventory/books/archive-multiple`, '', { ids });
  }

  permanentlyDeleteInventories(ids: number[]) {
    return this.ds.post(`/inventory/books/permanently-delete`, '', { ids });
  }
}
