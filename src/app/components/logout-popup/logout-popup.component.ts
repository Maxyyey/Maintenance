import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout-popup',
  templateUrl: './logout-popup.component.html',
  styleUrl: './logout-popup.component.scss'
})
export class LogoutPopupComponent {

  constructor(private as: AuthService, private router: Router) { }
  @Output() leaveClicked = new EventEmitter<void>();
  @Output() closedPopup = new EventEmitter<void>();

  close() {
    this.closedPopup.emit();
  }

  onLeaveClick() {
    //  this.as.logout () .subscribe ({
    //   next: (res:any) => this.router.navigate (['login'])
    //  })
    this.leaveClicked.emit();
  }
}
