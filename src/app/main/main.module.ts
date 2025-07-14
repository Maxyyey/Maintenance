import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { AddLockerComponent } from './components/addlocker/addlocker.component';
PersonnelSetupComponent
import { CatalogingComponent } from './components/cataloging/cataloging.component';
import { CirculationComponent } from './components/circulation/circulation.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ScanbarcodeComponent } from './components/inventory/scanbarcode/scanbarcode.component';
import { EnterbarcodeComponent } from './components/inventory/enterbarcode/enterbarcode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddAnnouncementComponent } from './components/announcement/add-announcement/add-announcement.component';
import { Cataloging1Component } from './components/dashboard/cataloging1/cataloging1.component';
import { Circulation1Component } from './components/dashboard/circulation1/circulation1.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PersonnelSetupComponent } from './components/personnelsetup/personnel-setup.component';
import { PersonnelSetupModule } from './components/personnelsetup/personnel-setup.module';
import { MaterialModule } from '@app/modules/material/material.module';
import { ChangePasswordComponent } from './components/change-password/change-password.component';




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
ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    LoadingComponent,
    PersonnelSetupModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
