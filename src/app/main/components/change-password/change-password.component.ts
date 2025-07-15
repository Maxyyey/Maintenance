import { Component, EventEmitter, OnDestroy, Output } from "@angular/core"
import { FormBuilder, Validators } from "@angular/forms"
import Swal from "sweetalert2"
import { DataService } from "@app/services/data.service"
import { MatDialogRef } from "@angular/material/dialog"
import { GlobalMethods } from "@app/shared/global.shared"

@Component({
     selector: "app-change-password",
     templateUrl: "./change-password.component.html",
     styleUrl: "./change-password.component.scss",
})
export class ChangePasswordComponent implements OnDestroy {
     constructor(private fb: FormBuilder, private ds: DataService, private ref: MatDialogRef<ChangePasswordComponent>, private gm: GlobalMethods) {}
     @Output() closed = new EventEmitter<void>()

     isSubmitting = false
     form = this.fb.group({
          old_password: ["", [Validators.required]],
          new_password: ["", [Validators.required, Validators.minLength(8)]],
          new_password_confirmation: ["", [Validators.required, Validators.minLength(8)]],
     })

     showPassword = {
          old: false,
          new: false,
          confirm: false,
     }

     isDiffPassword() {
          return this.form.get("new_password")?.value !== this.form.get("new_password_confirmation")?.value
     }

     togglePasswordVisibility(field: "old" | "new" | "confirm") {
          this.showPassword[field] = !this.showPassword[field]
     }

     submit() {
          const validation = this.isDiffPassword()
          if (validation) {
               this.gm.showAlert('Invalid Input!', 'Password do not match', 'error')
               return
          }
          
          if (this.isSubmitting) return
          this.isSubmitting = true

          if (this.form.valid) {
               this.ds.post("/change-password", "", this.form.value).subscribe({
                    next: (res: any) => {
                         this.isSubmitting = false
                         Swal.fire({
                              title: "Password Changed Successfully!",
                              text: "Your password has been updated.",
                              icon: "success",
                              confirmButtonText: "Close",
                              confirmButtonColor: "#777777",
                              scrollbarPadding: false,
                         })
                         this.close()
                    },
                    error: (err) => {
                         this.isSubmitting = false
                         Swal.fire({
                              title: "Error",
                              text: err.error.message || "Failed to change password",
                              icon: "error",
                              confirmButtonText: "Close",
                              confirmButtonColor: "#777777",
                              scrollbarPadding: false,
                         })
                    },
               })
          } else {
               console.error("Form is invalid")
          }
     }

     close() {
          this.closed.emit()
     }

     ngOnDestroy(): void {
          this.close()
     }
}
