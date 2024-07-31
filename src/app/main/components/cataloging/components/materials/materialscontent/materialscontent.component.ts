import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddiconComponent } from './addicon/addicon.component';
import { MaterialsHistoryComponent } from './materialshistory/materialshistory.component';
import { DataService } from '@app/services/data.service';

@Component({
  selector: 'app-materialscontent',
  templateUrl: './materialscontent.component.html',
  styleUrls: ['./materialscontent.component.scss'] // Corrected styleUrls
})
export class MaterialscontentComponent implements OnInit {
  locations: any[] = [];
  isModalOpen: boolean = false;
  currentPage = 1; // Assuming you manage pagination in your DataService
  itemsPerPage = 10; // Example items per page
  totalPages: number = 0; // Example total pages

  constructor(
    private dialogRef: MatDialog,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this.dataService.get('/locations').subscribe(
      (locations: any[]) => {
        this.locations = locations;
        // Update pagination info based on actual data length
        this.totalPages = Math.ceil(this.locations.length / this.itemsPerPage);
      },
      error => {
        console.error('Error fetching locations:', error);
      }
    );
  }

  paginatedLocations(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.locations.slice(startIndex, startIndex + this.itemsPerPage);
  }

  onAddNewBtnClick() {
    if (this.isModalOpen) {
      return;
    }

    this.isModalOpen = true;

    const modal = this.dialogRef.open(AddiconComponent, {});
    modal.afterClosed().subscribe(result => {
      this.isModalOpen = false;
      if (result && result.success) {
        this.locations.unshift(result.success);
        this.totalPages = Math.ceil(this.locations.length / this.itemsPerPage); // Update total pages
      }
    });
  }

  onhistorylogsBtnClick() {
    if (this.isModalOpen) {
      return;
    }

    this.isModalOpen = true;

    const modal = this.dialogRef.open(MaterialsHistoryComponent, {});
    modal.afterClosed().subscribe(result => {
      this.isModalOpen = false;
      if (result && result.success) {
        this.locations.push(result.success);
        this.totalPages = Math.ceil(this.locations.length / this.itemsPerPage); // Update total pages
      }
    });
  }

  getPaginationSummary(): string {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    return `${currentPage} of ${totalPages}`;
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
