import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ADMIN MAIN COMPONENTS
import { MainRoutingModule } from './main-routing.module';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { PersonnelSetupComponent } from './components/personnelsetup/personnelsetup.component';
import { CirculationComponent } from './components/circulation/circulation.component';
import { HistoryComponent  } from './components/addlocker/history/history.component';
import { UserComponent } from './components/addlocker/user/user.component';
import { AddUserComponent } from './components/personnelsetup/adduser/adduser.component';

@NgModule({
  declarations: [
    InventoryComponent,
    AnnouncementComponent,
    PersonnelSetupComponent,
    CirculationComponent,
    HistoryComponent,
    UserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
