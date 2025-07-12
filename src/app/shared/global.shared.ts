import Swal, { SweetAlertIcon } from "sweetalert2"
import { Injectable } from "@angular/core"

@Injectable({ providedIn: "root" })
export class GlobalMethods {
     public showAlert(title: string, text: string, icon: SweetAlertIcon, showConfirmButton: boolean = false, confirmButtonText: string | undefined = "close"): void {
          Swal.fire({ title, text, icon, showConfirmButton, confirmButtonText, confirmButtonColor: "#777777" })
     }
     async confirmationAlert(title: string, text: string, icon: SweetAlertIcon, confirmButtonText: string = "Yes", type: "destructive" | "confirmation" = "destructive") {
          let alert: Promise<boolean> = Swal.fire({
               title,
               text,
               icon,
               showCancelButton: true,
               confirmButtonText,
               cancelButtonText: "No",
               confirmButtonColor: type === "destructive" ? "#AB0E0E" : "#527853",
               cancelButtonColor: "#777777",
               heightAuto: false,
          }).then((res: any) => {
               if (res.value) {
                    return true
               }
               return false
          })

          return alert
     }

     public showToast(message: string, icon: SweetAlertIcon, duration: number = 2500): void {
          const Toast = Swal.mixin({
               toast: true,
               position: "top-end",
               showConfirmButton: false,
               timer: duration,
               timerProgressBar: true,
               didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer)
                    toast.addEventListener("mouseleave", Swal.resumeTimer)
               },
          })

          Toast.fire({
               icon: icon,
               titleText: message,
          })
     }
}
