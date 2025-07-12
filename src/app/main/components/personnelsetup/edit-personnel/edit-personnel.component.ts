import { Component, Inject } from "@angular/core"
import { MatDialogRef } from "@angular/material/dialog"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { GlobalMethods } from "@app/shared/global.shared"
import { MAT_DIALOG_DATA } from "@angular/material/dialog"
import { DataService } from "@app/services/data.service"

@Component({
     selector: "app-edit-personnel",
     templateUrl: "./edit-personnel.component.html",
     styleUrl: "./edit-personnel.component.scss",
})
export class EditPersonnelComponent {
     personnelForm: FormGroup

     constructor(
          private ref: MatDialogRef<EditPersonnelComponent>,
          private ds: DataService,
          private fb: FormBuilder,
          private gb: GlobalMethods,
          @Inject(MAT_DIALOG_DATA) public data: any
     ) {
          this.personnelForm = this.fb.group({
               first_name: ["", [Validators.required, Validators.maxLength(30)]],
               middle_name: ["", [Validators.maxLength(30)]],
               last_name: ["", [Validators.required, Validators.maxLength(30)]],
               ext_name: ["", [Validators.maxLength(30)]],
               username: ["", [Validators.required, Validators.maxLength(64)]],
               position: ["", [Validators.required, Validators.maxLength(50)]],
               role: this.fb.group({
                    circulation: false,
                    cataloging: false,
                    locker: false,
               }),
          })
          this.personnelForm.patchValue(this.data)
          const roles = this.data.role

          roles.forEach((role: any) => {
               this.personnelForm.patchValue({ role: { [role]: true } })
          })
     }

     closeDialog() {
          this.ref.close()
     }

     async update() {
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

          const response = await this.gb.confirmationAlert("Update?", "the information of the personnel will be updated.", "question", " Yes", "confirmation")

          if (!response) return

          const data = this.personnelForm.value
          const formData = new FormData()

          formData.append("first_name", data.first_name)
          formData.append("middle_name", data.middle_name)
          formData.append("last_name", data.last_name)
          formData.append("ext_name", data.ext_name)
          formData.append("username", data.username)
          formData.append("position", data.position)
          formData.append("role", JSON.stringify(roleArray))

          this.ds.post("/personnels/", this.data.id, formData).subscribe(
               (response) => {
                    this.ref.close(response)
                    this.gb.showAlert("Added!", "Personnel has been updated.", "success")
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
          const response = await this.gb.confirmationAlert("Cancel?", "Editing of personnel will be cancelled.", "question", " Yes", "destructive")

          if (!response) return

          this.closeDialog()
          this.gb.showToast("Changes not saved!", "error")
     }
}
