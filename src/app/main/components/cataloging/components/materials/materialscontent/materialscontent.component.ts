import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddiconComponent } from './addicon/addicon.component';
import { MaterialsHistoryComponent } from './materialshistory/materialshistory.component';
import { DataService } from '@app/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-materialscontent',
  templateUrl: './materialscontent.component.html',
  styleUrls: ['./materialscontent.component.scss']
})
export class MaterialscontentComponent implements OnInit {
  locations: any[] = [];
  isModalOpen: boolean = false;
  currentPage = 1; 
  itemsPerPage = 10; 
  totalPages: number = 0; 
  isLoading = true;

  constructor(
    private dialogRef: MatDialog,
    private dataService: DataService,
    private snackBar: MatSnackBar // To show success/error messages
  ) {}

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this.isLoading = true;
    this.dataService.get('/locations').subscribe(
      (locations: any[]) => {
        this.locations = locations;
        this.totalPages = Math.ceil(this.locations.length / this.itemsPerPage);
        this.isLoading = false;
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
        this.totalPages = Math.ceil(this.locations.length / this.itemsPerPage);
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
        this.totalPages = Math.ceil(this.locations.length / this.itemsPerPage);
      }
    });
  }

  onUpdateLocation(location: any) {
    if (this.isModalOpen) {
      return;
    }

    this.isModalOpen = true;

    const modal = this.dialogRef.open(AddiconComponent, {
      data: { location } // Pass the existing location to the modal
    });

    modal.afterClosed().subscribe(result => {
      this.isModalOpen = false;
      if (result && result.success) {
        // Update the location in the array
        const index = this.locations.findIndex(loc => loc.location_short === location.location_short);
        if (index !== -1) {
          this.locations[index] = result.success;
          this.snackBar.open('Location updated successfully!', 'Close', {
            duration: 3000
          });
        }
      }
    });
  }

  onDeleteLocation(location_short: string) {
    Swal.fire({
      title: "Delete Location",
      text: "Are you sure you want to delete this location?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#AB0E0E",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        this.dataService.delete(`/locations/${location_short}`).subscribe(
          () => {
            this.locations = this.locations.filter(loc => loc.location_short !== location_short);
            this.totalPages = Math.ceil(this.locations.length / this.itemsPerPage);
            this.snackBar.open('Location deleted successfully!', 'Close', {
              duration: 3000
            });
          },
          error => {
            console.error('Error deleting location:', error);
            this.snackBar.open('Error deleting location!', 'Close', {
              duration: 3000
            });
          }
        );
      }
    });
  }
//test  

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
