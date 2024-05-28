import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from './adduser/adduser.component';
import { EditUserComponent } from './edituser/edituser.component';
import { PersonnelService } from '@app/services/personnel.service';
import Swal from 'sweetalert2';
import { error } from 'console';

@Component({
  selector: 'app-personnelsetup',
  templateUrl: './personnelsetup.component.html',
  styleUrls: ['./personnelsetup.component.scss'],
})
export class PersonnelSetupComponent implements OnInit {
  currentPage = 1;
  itemsPerPage = 10;
  personnels: any = [];
  isModalOpen: boolean = false

  constructor(private dialogRef: MatDialog, private personnelService: PersonnelService) { }

  ngOnInit() {
    this.getPersonnels()
  }

  getPersonnels() {
    this.personnelService.getPersonnels().subscribe(
      personnels => {
        this.personnels = personnels.users
        console.log(this.personnels)
      },
      error => {
        console.error(error)
      }
    )
  }

  get totalPages(): number {
    return Math.ceil(this.personnels.length / this.itemsPerPage);
  }

  paginatedPersonnels(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.personnels.slice(startIndex, endIndex);
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
    if(this.isModalOpen) {
      return
    }
    
    this.isModalOpen = true

    let modal = this.dialogRef.open(AddUserComponent, {});
    modal.afterClosed().subscribe(
      result => {
        this.isModalOpen = false

        if(result) {
          this.personnels.push(result.success)
        }
      }
    )
  }

  onEditBtnClick(id: number) {
    if(this.isModalOpen) {
      return
    }
    
    this.isModalOpen = true

    this.personnelService.getPersonnel(id).subscribe(
      personnel => {
        let modal = this.dialogRef.open(EditUserComponent, {
          data: personnel
        });
        modal.afterClosed().subscribe(
          result => { 
            this.isModalOpen = false
            if(result) {
              this.personnels = this.personnels.map(
                (personnel: any) => {
                  if(personnel.id === result.data.id) {
                    return {...personnel, ...result.data}
                  }
                  return personnel
                }
              )
            }
          }
        )
      },
      error => {
        console.error(error);
        this.isModalOpen = false
      }
    );
  }

  deletePersonnel(id: number) {
    this.personnelService.deletePersonnel(id).subscribe(
      success => {
        this.personnels = this.personnels.filter((personnel: any) => personnel.id !== id)
        Swal.fire({
          title: "Success!",
          text: "Personnel has been deleted.",
          icon: "success",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
        });
      },
      error => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
        });

      }
    )

  }

  onArchiveBtnClick(id: number) {
    Swal.fire({
      title: "Delete personnel?",
      text: "Are you sure want to delete this personnel?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#AB0E0E",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        this.deletePersonnel(id)
      }
    });
  }
}
