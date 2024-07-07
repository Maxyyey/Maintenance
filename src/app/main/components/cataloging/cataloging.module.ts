import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 // Import RouterModule
import { CatalogingRoutingModule } from './cataloging-routing.module'; // Import the routing module


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialscontentComponent } from './components/materials/materialscontent/materialscontent.component';
import { AcademiccontentComponent } from './components/academicproject/academiccontent/academiccontent.component';
import { AddiconComponent } from './components/materials/materialscontent/addicon/addicon.component';
import { AddiconacadComponent } from './components/academicproject/academiccontent/addiconacad/addiconacad.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AddiconacadComponent,
    MaterialscontentComponent,
    AcademiccontentComponent,

  ],
  imports: [
    CommonModule,
    CatalogingRoutingModule,
    FormsModule,
    MatButtonModule, 
    MatMenuModule,
    CommonModule,
    ReactiveFormsModule
  ],
  // Other configurations...
})
export class CatalogingModule { }
