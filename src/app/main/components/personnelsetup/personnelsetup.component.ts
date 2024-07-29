import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from './adduser/adduser.component';
import { EditUserComponent } from './edituser/edituser.component';
import { PersonnelService } from '@app/services/personnel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personnelsetup',
  templateUrl: './personnelsetup.component.html',
  styleUrls: ['./personnelsetup.component.scss'],
})
export class PersonnelSetupComponent implements OnInit {
  currentPage = 1;
  itemsPerPage = 10;
  personnels: any = [];
  filteredPersonnels: any = []; // Added for filtering
  isModalOpen: boolean = false;

  constructor(private dialogRef: MatDialog, private personnelService: PersonnelService) {}

  ngOnInit() {
    this.getPersonnels();
  }

  getPersonnels() {
    this.personnelService.getPersonnels().subscribe(
      (personnels) => {
        this.personnels = personnels.users;
        this.filteredPersonnels = [...this.personnels]; // Initialize filteredPersonnels
      },
      (error) => {
        console.error(error);
      }
    );
  }

  get totalPages(): number {
    return Math.ceil(this.filteredPersonnels.length / this.itemsPerPage);
  }

  paginatedPersonnels(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredPersonnels.slice(startIndex, endIndex);
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

  search(value: string) {
    const searchTerm = value.toLowerCase();
    this.filteredPersonnels = this.personnels.filter((personnel: any) =>
      {
        let fullname = personnel.first_name.toLowerCase() + " " + personnel.last_name.toLowerCase()
        return  fullname.includes(searchTerm) ||
                personnel.role.some( (role: any) => role.toLowerCase().includes(searchTerm)) ||
                personnel.username.toLowerCase().includes(searchTerm)
        
      }
    );
    this.currentPage = 1; // Reset to first page after search
  }

  getPaginationSummary(): string {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    return `${currentPage} of ${totalPages}`;
  }
  

  onAddNewBtnClick() {
    if (this.isModalOpen) {
      return;
    }

    this.isModalOpen = true;

    let modal = this.dialogRef.open(AddUserComponent, {});
    modal.afterClosed().subscribe((result) => {
      this.isModalOpen = false;

      if (result) {
        this.personnels.push(result.success);
        this.filteredPersonnels = [...this.personnels]; // Update filteredPersonnels after adding new personnel
      }
    });
  }

  onEditBtnClick(id: number) {
    if (this.isModalOpen) {
      return;
    }

    this.isModalOpen = true;

    this.personnelService.getPersonnel(id).subscribe(
      (personnel) => {
        let modal = this.dialogRef.open(EditUserComponent, {
          data: personnel,
        });
        modal.afterClosed().subscribe((result) => {
          this.isModalOpen = false;
          if (result) {
            // Update personnel in both lists
            this.personnels = this.personnels.map((p: any) => (p.id === result.data.id ? result.data : p));
            this.filteredPersonnels = this.filteredPersonnels.map((p: any) =>
              p.id === result.data.id ? result.data : p
            );
          }
        });
      },
      (error) => {
        console.error(error);
        this.isModalOpen = false;
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonText: 'Close',
          confirmButtonColor: '#777777',
        });
      }
    );
  }

  deletePersonnel(id: number) {
    this.personnelService.deletePersonnel(id).subscribe(
      () => {
        this.personnels = this.personnels.filter((personnel: any) => personnel.id !== id);
        this.filteredPersonnels = this.filteredPersonnels.filter((personnel: any) => personnel.id !== id);
        Swal.fire({
          title: 'Success!',
          text: 'Personnel has been deleted.',
          icon: 'success',
          confirmButtonText: 'Close',
          confirmButtonColor: '#777777',
        });
      },
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonText: 'Close',
          confirmButtonColor: '#777777',
        });
      }
    );
  }

  onArchiveBtnClick(id: number) {
    Swal.fire({
      title: 'Delete personnel?',
      text: 'Are you sure want to delete this personnel?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#AB0E0E',
      cancelButtonColor: '#777777',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deletePersonnel(id);
      }
    });
  }

  
}
