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

  constructor(private dialogRef: MatDialog, private personnelService: PersonnelService) { }

  async ngOnInit(): Promise<void> {
    this.personnels = await this.personnelService.getPersonnels();
  }

  get totalPages(): number {
    return Math.ceil(this.personnels.users.length / this.itemsPerPage);
  }

  paginatedPersonnels(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.personnels.users.slice(startIndex, endIndex);
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
    value = value.toUpperCase();
    let tbody = document.getElementById("personnels");
    if (tbody) {
      let tr = tbody.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        let txtValue = td.textContent || td.innerText;

        let td2 = tr[i].getElementsByTagName("td")[1];
        let access = td2.textContent || td2.innerText;

        let td3 = tr[i].getElementsByTagName("td")[2];
        let email = td3.textContent || td3.innerText;

        if (txtValue.toUpperCase().indexOf(value) > -1 || access.toUpperCase().indexOf(value) > -1 || email.toUpperCase().indexOf(value) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  onAddNewBtnClick() {
    this.dialogRef.open(AddUserComponent, {});
  }

  onEditBtnClick(id: number) {
    this.personnelService.getPersonnel(id).subscribe(
      personnel => {
        this.dialogRef.open(EditUserComponent, {
          data: personnel
        });
      },
      error => {
        console.error(error);
      }
    );
  }

  onArchiveBtnClick(id: number) {
    Swal.fire({
      title: "Delete Project",
      text: "Are you sure want to delete this project?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#AB0E0E",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleting complete!",
          text: "Project has been deleted.",
          icon: "success",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
        });
      }
    });
  }
}
