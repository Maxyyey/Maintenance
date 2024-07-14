import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { AddLockerComponent } from './components/addlocker/addlocker.component';
import { PersonnelSetupComponent } from './components/personnelsetup/personnelsetup.component';
import { CatalogingComponent } from './components/cataloging/cataloging.component';
import { CirculationComponent } from './components/circulation/circulation.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ScanbarcodeComponent } from './components/inventory/scanbarcode/scanbarcode.component';
import { EnterbarcodeComponent } from './components/inventory/enterbarcode/enterbarcode.component';
import { ClearhistoryComponent } from './components/inventory/clearhistory/clearhistory.component';
import { HistoryComponent } from './components/addlocker/components/history/history.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddAnnouncementComponent } from './components/announcement/add-announcement/add-announcement.component';
import { Cataloging1Component } from './components/dashboard/cataloging1/cataloging1.component';




@NgModule({
  declarations: [
    AddLockerComponent,
    PersonnelSetupComponent,
    CatalogingComponent,
    CirculationComponent,
    AnnouncementComponent,
    InventoryComponent,
    ScanbarcodeComponent,
    EnterbarcodeComponent,
    ClearhistoryComponent,
    HistoryComponent,
    DashboardComponent,
    AddAnnouncementComponent,
    Cataloging1Component
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
  ]
})
export class MainModule { }
