import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddLockerComponent } from './components/addlocker/addlocker.component';
import { PersonnelSetupComponent } from './components/personnelsetup/personnelsetup.component';
import { CatalogingComponent } from './components/cataloging/cataloging.component';
import { CirculationComponent } from './components/circulation/circulation.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { InventoryComponent } from './components/inventory/inventory.component';

const routes: Routes = [
  { path: '', redirectTo: 'addlocker', pathMatch: 'full' },
  { path: 'addlocker', component: AddLockerComponent, },
  { path: 'personnelsetup', component: PersonnelSetupComponent },
  { path: 'cataloging', component: CatalogingComponent,
  children: [{
    path: '',
    loadChildren: ()=>import('./components/cataloging/cataloging.module').then((m)=>m.CatalogingModule)
  }]
   },
  { path: 'circulation', component: CirculationComponent },
  { path: 'announcement', component: AnnouncementComponent },
  { path: 'inventory', component: InventoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
