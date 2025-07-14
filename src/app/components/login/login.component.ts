import { Component } from "@angular/core"
import { AuthService } from "@app/services/auth.service"
import { Router } from "@angular/router"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { GlobalMethods } from "@app/shared/global.shared"

@Component({
     selector: "app-login",
     templateUrl: "./login.component.html",
     styleUrl: "./login.component.scss",
})
export class LoginComponent {
     isLoggingIn: boolean = false
     loginForm: FormGroup
     showPassword = false

     constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private gm: GlobalMethods) {
          this.loginForm = this.fb.group({
               username: [null, Validators.required],
               password: [null, Validators.required],
          })
     }

     login() {
          if (this.isLoggingIn) return

          this.isLoggingIn = true

          this.authService.login(this.loginForm.value).subscribe(
               (response) => {
                    this.router.navigate(["/main"])
                    this.gm.showToast('Login Successful', 'success', 3000)
                    this.isLoggingIn = false
               },
               (error) => {
                    this.gm.showAlert('Unauthorized User', error.error.message, 'error')
                    this.isLoggingIn = false
               },
          )
     }

     toggleShow() {
          this.showPassword = !this.showPassword
     }
}
