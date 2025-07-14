import { Component } from "@angular/core"
import { MatDialog } from "@angular/material/dialog"
import { AddPersonnelComponent } from "./add-personnel/add-personnel.component"
import { EditPersonnelComponent } from "./edit-personnel/edit-personnel.component"
import { GlobalMethods } from "@app/shared/global.shared"
import { DataService } from "@app/services/data.service"

@Component({
     selector: "app-personnel-setup",
     templateUrl: "./personnel-setup.component.html",
     styleUrl: "./personnel-setup.component.scss",
})
export class PersonnelSetupComponent {
     currentPage = 1
     itemsPerPage = 10
     personnels: any = []
     filteredPersonnels: any = [] // Added for filtering
     isModalOpen: boolean = false
     isLoading = true

     constructor(private dialogRef: MatDialog, private gm: GlobalMethods, private ds: DataService) {}

     ngOnInit() {
          this.getPersonnels()
     }

     getPersonnels() {
          this.isLoading = true
          this.ds.get("/personnels").subscribe(
               (personnels) => {
                    this.personnels = personnels.users
                    this.filteredPersonnels = [...this.personnels] // Initialize filteredPersonnels
                    this.isLoading = false
               },
               (error) => {
                    console.error(error)
               }
          )
     }

     get totalPages(): number {
          return Math.ceil(this.filteredPersonnels.length / this.itemsPerPage)
     }

     paginatedPersonnels(): any[] {
          const startIndex = (this.currentPage - 1) * this.itemsPerPage
          const endIndex = startIndex + this.itemsPerPage
          return this.filteredPersonnels.slice(startIndex, endIndex)
     }

     previousPage(): void {
          if (this.currentPage > 1) {
               this.currentPage--
          }
     }

     nextPage(): void {
          if (this.currentPage < this.totalPages) {
               this.currentPage++
          }
     }

     search(value: string) {
          const searchTerm = value.toLowerCase()
          this.filteredPersonnels = this.personnels.filter((personnel: any) => {
               let fullname = personnel.first_name.toLowerCase() + " " + personnel.last_name.toLowerCase()
               return (
                    fullname.includes(searchTerm) ||
                    personnel.role.some((role: any) => role.toLowerCase().includes(searchTerm)) ||
                    personnel.username.toLowerCase().includes(searchTerm)
               )
          })
          this.currentPage = 1 // Reset to first page after search
     }

     getPaginationSummary(): string {
          const totalPages = this.totalPages
          const currentPage = this.currentPage
          return `${currentPage} of ${totalPages}`
     }

     addPersonnel() {
          let modal = this.dialogRef.open(AddPersonnelComponent, {})
          modal.afterClosed().subscribe((result) => {
               if (result) {
                    this.personnels.push(result.success)
                    this.filteredPersonnels = [...this.personnels]
               }
          })
     }

     editPersonnel(id: any) {
          if (this.isModalOpen) {
               return
          }

          this.isModalOpen = true

          this.ds.get("/personnels/", id).subscribe(
               (personnel) => {
                    let modal = this.dialogRef.open(EditPersonnelComponent, {
                         data: personnel,
                    })
                    modal.afterClosed().subscribe((result) => {
                         this.isModalOpen = false
                         if (result) {
                              this.personnels = this.personnels.map((p: any) => (p.id === result.data.id ? result.data : p))
                              this.filteredPersonnels = this.filteredPersonnels.map((p: any) => (p.id === result.data.id ? result.data : p))
                         }
                    })
               },
               (error) => {
                    console.error(error)
                    this.isModalOpen = false
                    this.gm.showAlert("Oops!", "Something went wrong. Please try again later.", "error")
               }
          )
     }

     async archive(id: number) {
          const response = await this.gm.confirmationAlert("Delete Personnel?", "Are you sure want to delete this personnel?", "warning", "Yes", "destructive")

          if (!response) return

          this.ds.post("/personnels/delete", "", { id }).subscribe(
               () => {
                    this.personnels = this.personnels.filter((personnel: any) => personnel.id !== id)
                    this.filteredPersonnels = this.filteredPersonnels.filter((personnel: any) => personnel.id !== id)
                    this.gm.showAlert("Success!", "Personnel has been deleted.", "success")
               },
               (error) => {
                    this.gm.showAlert("Oops!", "Something went wrong. Please try again later.", "error")
               }
          )
     }
}
