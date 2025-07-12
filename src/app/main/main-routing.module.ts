import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddLockerComponent } from './components/addlocker/addlocker.component';
import { PersonnelSetupComponent } from './components/personnelsetup/personnel-setup.component';
import { CatalogingComponent } from './components/cataloging/cataloging.component';
import { CirculationComponent } from './components/circulation/circulation.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { Circulation1Component } from './components/dashboard/circulation1/circulation1.component';
import { Cataloging1Component } from './components/dashboard/cataloging1/cataloging1.component';
import { Locker1Component } from './components/dashboard/locker1/locker1.component';

const routes: Routes = [
  { path: '', redirectTo: 'circulation1', pathMatch: 'full' },
  {
    path: 'addlocker', component: AddLockerComponent,

  },
  { path: 'personnel-setup', component: PersonnelSetupComponent},
  {
    path: 'cataloging', component: CatalogingComponent,
    children: [{
      path: '',
      loadChildren: () => import('./components/cataloging/cataloging.module').then((m) => m.CatalogingModule)
    }]
  },
  { path: 'circulation', component: CirculationComponent },
  { path: 'announcement', component: AnnouncementComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'circulation1', component: Circulation1Component },
  { path: 'cataloging1', component: Cataloging1Component },
  { path: 'locker1', component: Locker1Component },
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
