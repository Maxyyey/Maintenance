import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import RouterModule
import { CatalogingRoutingModule } from './cataloging-routing.module'; // Import the routing module


import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialscontentComponent } from './components/materials/materialscontent/materialscontent.component';
import { AcademiccontentComponent } from './components/academicproject/academiccontent/academiccontent.component';
import { AddiconComponent } from './components/materials/materialscontent/addicon/addicon.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AddProgramComponent } from './components/academicproject/academiccontent/add-program/add-program.component';
import { AddDepartmentComponent } from './components/academicproject/academiccontent/add-department/add-department.component';
import { EditiconComponent } from './components/materials/materialscontent/editicon/editicon.component';


@NgModule({
  declarations: [
    MaterialscontentComponent,
    AcademiccontentComponent,
    AddProgramComponent,
    AddDepartmentComponent,
    AddiconComponent,
    EditiconComponent

  ],
  imports: [
    CommonModule,
    CatalogingRoutingModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  // Other configurations...
})
export class CatalogingModule { }
