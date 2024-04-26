import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AddLockerRoutingModule } from './addlocker-routing.module'; // Import the routing module

import { HistoryComponent } from './components/history/history.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    HistoryComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    AddLockerRoutingModule,
  ],
  // Other configurations...
})
export class AddLockerModule { }
