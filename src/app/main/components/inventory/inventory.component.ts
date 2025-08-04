import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScanbarcodeComponent } from './scanbarcode/scanbarcode.component';
import { EnterbarcodeComponent } from './enterbarcode/enterbarcode.component';
import { InventoryService } from '@app/services/inventory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  inventories: any[] = [];
  filter: number = 0;
  currentPage = 1;
  itemsPerPage = 12;
  filteredInventories: any[] = [];
  isLoading=true;

  constructor(
    private dialogRef: MatDialog,
    private inventoryService: InventoryService
  ) {}

  ngOnInit() {
    this.getInventories();
  }

  get totalPages(): number {
    return Math.ceil(this.filteredInventories.length / this.itemsPerPage);
  }

  paginatedInventories(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredInventories.slice(startIndex, endIndex);
  }

  search(value: string) {
    const searchTerm = value.toLowerCase();
    console.log('Search term:', searchTerm); // Debugging line

    this.filteredInventories = this.inventories.filter((inventory: any) => {
      const accession = inventory.accession?.toString().toLowerCase() || '';
      const location = inventory.location?.toLowerCase() || '';
      const title = inventory.title?.toLowerCase() || '';
      const authors = inventory.authors?.map((author: string) => author.toLowerCase()) || [];
      
      // Convert status to string and handle non-string values
      const status = inventory.status ? inventory.status.toString().toLowerCase() : '';

      const authorMatch = authors.some((author: string) => author.includes(searchTerm));

      return (
        accession.includes(searchTerm) ||
        location.includes(searchTerm) ||
        title.includes(searchTerm) ||
        authorMatch ||
        status.includes(searchTerm)
      );
    });

    this.currentPage = 1; // Reset to first page after search
    console.log('Filtered inventories:', this.filteredInventories); // Debugging line
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

  onFilterChange(event: Event) {
    const element = event.target as HTMLSelectElement;
    this.filter = parseInt(element.value, 10);
    this.getInventories();
    this.currentPage = 1;
    console.log('Filter changed to:', this.filter); // Debugging line
  }

  onStatusChange(event: Event, id: number) {
    const element = event.target as HTMLSelectElement;
    let form = { status: element.value };

    this.inventoryService.updateBookInventoryStatus(form, id).subscribe(
      (response) => {
        console.log('Status update response:', response); // Debugging line
        Swal.fire({
          title: 'Update Successful',
          icon: 'success',
          timer: 3000,
          timerProgressBar: true,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          customClass: {
            popup: 'sweetalert-custom-popup',
            title: 'sweetalert-custom-title',
            icon: 'sweetalert-custom-icon-success',
          },
          background: '#ffffff',
        });
      },
      (error) => {
        console.log('Status update error:', error); // Debugging line
        Swal.fire({
          title: 'Something went wrong. Please try again later',
          icon: 'error',
          timer: 3000,
          timerProgressBar: true,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          customClass: {
            popup: 'sweetalert-custom-popup',
            title: 'sweetalert-custom-title',
            icon: 'sweetalert-custom-icon-success',
          },
          background: '#ffffff',
        });
      }
    );
  }

  getInventories() {
    this.isLoading=true;
    this.inventoryService.getBookInventories(this.filter).subscribe(
      (inventories) => {
        this.inventories = inventories || [];
        this.filteredInventories = [...this.inventories]; // Initialize filtered inventories
        console.log('Fetched inventories:', this.inventories); // Debugging line
        this.isLoading=false;
      },
      (error) => {
        console.error('Error fetching inventories:', error); // Debugging line
      }
    );
  }

  onAddNewBtnClick() {
    this.dialogRef.open(ScanbarcodeComponent, {});
  }

  onAddNewBtnClick1() {
    this.dialogRef.open(EnterbarcodeComponent, {});
  }

  clearInventoryStatus() {
    this.inventoryService.clearBookInventoryStatus().subscribe(
      (result) => {
        Swal.fire({
          title: 'Clearing complete!',
          text: 'History has been cleared.',
          icon: 'success',
          confirmButtonText: 'Close',
          confirmButtonColor: '#777777',
        });
        this.getInventories();
      },
      (error) => {
        console.error('Error clearing inventory status:', error); // Debugging line
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again later',
          icon: 'error',
          confirmButtonText: 'Close',
          confirmButtonColor: '#777777',
        });
      }
    );
  }

  onClrHistoryBtnClick() {
    Swal.fire({
      title: 'Clear History',
      text: 'Are you sure want to clear history?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#AB0E0E',
      cancelButtonColor: '#777777',
    }).then((result) => {
      if (result.isConfirmed) {
        this.clearInventoryStatus();
      }
    });
  }

  getPaginationSummary(): string {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    return `${currentPage} of ${totalPages}`;
  }
}
