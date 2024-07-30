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
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddAnnouncementComponent } from './components/announcement/add-announcement/add-announcement.component';
import { Cataloging1Component } from './components/dashboard/cataloging1/cataloging1.component';
import { Circulation1Component } from './components/dashboard/circulation1/circulation1.component';
import { LoadingComponent } from './components/loading/loading.component';




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
    DashboardComponent,
    AddAnnouncementComponent,
    Cataloging1Component,
    Circulation1Component,

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    LoadingComponent

  ]
})
export class MainModule { }
