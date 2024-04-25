import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ADMIN MAIN COMPONENTS
import { MainRoutingModule } from './main-routing.module';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { PersonnelSetupComponent } from './components/personnelsetup/personnelsetup.component';
import { CirculationComponent } from './components/circulation/circulation.component';
import { CatalogingComponent } from './components/cataloging/cataloging.component';
import { HistoryComponent  } from './components/addlocker/history/history.component';
import { UserComponent } from './components/addlocker/user/user.component';
import { AddUserComponent } from './components/personnelsetup/adduser/adduser.component';
import { UploadComponent } from './components/circulation/upload/upload.component';
import { AddComponent } from './components/announcement/add/add.component';

@NgModule({
  declarations: [
    InventoryComponent,
    AnnouncementComponent,
    PersonnelSetupComponent,
    CirculationComponent,
    CatalogingComponent,
    HistoryComponent,
    UserComponent,
    AddUserComponent,
    UploadComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
