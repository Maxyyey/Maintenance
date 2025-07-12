import { Component } from "@angular/core"
import { MatDialogRef } from "@angular/material/dialog"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { GlobalMethods } from "@app/shared/global.shared"
import { DataService } from "@app/services/data.service"

@Component({
     selector: "app-add-personnel",
     templateUrl: "./add-personnel.component.html",
     styleUrl: "./add-personnel.component.scss",
})
export class AddPersonnelComponent {
     personnelForm: FormGroup

     constructor(private ref: MatDialogRef<AddPersonnelComponent>, private ds: DataService, private fb: FormBuilder, private gb: GlobalMethods) {
          this.personnelForm = this.fb.group({
               first_name: ["", [Validators.required, Validators.maxLength(30)]],
               middle_name: ["", [Validators.maxLength(30)]],
               last_name: ["", [Validators.required, Validators.maxLength(30)]],
               ext_name: ["", [Validators.maxLength(30)]],
               username: ["", [Validators.required, Validators.maxLength(64)]],
               password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
               position: ["", [Validators.required, Validators.maxLength(50)]],
               role: this.fb.group({
                    circulation: false,
                    cataloging: false,
                    locker: false,
               }),
          })
     }

     closeDialog() {
          this.ref.close()
     }

     async add() {
          if (this.personnelForm.invalid) {
               this.personnelForm.markAllAsTouched()
               return
          }

          const roleArray = []

          const role = this.personnelForm.value.role
          for (const [key, value] of Object.entries(role)) {
               if (value) {
                    roleArray.push(key)
               }
          }

          if (roleArray.length <= 0) {
               this.gb.showAlert("Invalid Role!", "Please select at least 1 role for the personnel.", "info")
               return
          }

          const response = await this.gb.confirmationAlert("Add User?", "This personnel will be added.", "question", " Yes", "confirmation")

          if (!response) return

          const data = this.personnelForm.value
          const formData = new FormData()

          formData.append("first_name", data.first_name)
          formData.append("middle_name", data.middle_name)
          formData.append("last_name", data.last_name)
          formData.append("ext_name", data.ext_name)
          formData.append("username", data.username)
          formData.append("password", data.password)
          formData.append("position", data.position)
          formData.append("role", JSON.stringify(roleArray))

          this.ds.post("/personnels", "", formData).subscribe(
               (response) => {
                    this.ref.close(response)
                    this.gb.showAlert("Added!", "Personnel has been added.", "success")
               },
               (error) => {
                    console.error(error)
                    if (error.status === 422) {
                         this.gb.showAlert(error.error.title || "Invalid Input!", error.error.message || "Invalid Input.", "error")
                    } else {
                         this.gb.showAlert(error.error.title || "Oops!", error.error.message || "Something went wrong. Please try again later.", "error")
                    }
               }
          )
     }

     async cancel() {
          const response = await this.gb.confirmationAlert("Cancel?", "Adding of personnel will be cancelled.", "question", " Yes", "destructive")

          if (!response) return

          this.closeDialog()
          this.gb.showToast("Changes not saved!", "error")
     }
}
