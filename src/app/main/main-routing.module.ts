import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { InventoryComponent } from './components/inventory/inventory.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { PersonnelSetupComponent } from './components/personnelsetup/personnelsetup.component';
import { CirculationComponent } from './components/circulation/circulation.component';
import { AddLockerComponent } from './components/addlocker/addlocker.component';


const routes: Routes = [
  { path: '', redirectTo: 'addmaterials', pathMatch: 'full' },
  { path: 'announcement', component: AnnouncementComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'personnelsetup', component: PersonnelSetupComponent},
  { path: 'circulation', component: CirculationComponent},
  { path: 'addlocker', component: AddLockerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
