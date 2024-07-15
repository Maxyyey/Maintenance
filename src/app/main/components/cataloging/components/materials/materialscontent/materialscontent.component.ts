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
  currentPage: number = 1; // Assuming you manage pagination in your DataService
  itemsPerPage: number = 10; // Example items per page
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
    const startIndex = (this.currentPage - 1) * this.itemsPerPage + 1;
    const endIndex = Math.min(startIndex + this.itemsPerPage - 1, this.locations.length);
    return `Showing ${startIndex} to ${endIndex} of ${this.locations.length} items`;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
