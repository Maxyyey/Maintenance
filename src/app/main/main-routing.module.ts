import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { InventoryComponent } from './components/inventory/inventory.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { PersonnelSetupComponent } from './components/personnelsetup/personnelsetup.component';
import { CirculationComponent } from './components/circulation/circulation.component';
import { AddLockerComponent } from './components/addlocker/addlocker.component';
import { HistoryComponent } from './components/addlocker/history/history.component';
import { UserComponent } from  './components/addlocker/user/user.component';
import { AddUserComponent } from  './components/personnelsetup/adduser/adduser.component';
import { UploadComponent } from  './components/circulation/upload/upload.component';
import { AddComponent } from  './components/announcement/add/add.component';

const routes: Routes = [
  { path: '', redirectTo: 'addmaterials', pathMatch: 'full' },
  { path: 'announcement', component: AnnouncementComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'personnelsetup', component: PersonnelSetupComponent},
  { path: 'circulation', component: CirculationComponent},
  { path: 'addlocker', component: AddLockerComponent},
  { path: 'history',  component: HistoryComponent},
  { path: 'user', component: UserComponent},
  { path: 'adduser', component: AddUserComponent},
  { path: 'upload', component: UploadComponent},
  { path: 'add', component: AddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
