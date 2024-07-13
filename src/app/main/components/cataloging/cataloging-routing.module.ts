import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialscontentComponent } from './components/materials/materialscontent/materialscontent.component';
import { AcademiccontentComponent } from './components/academicproject/academiccontent/academiccontent.component';

const routes: Routes = [
  { path: '', redirectTo: 'materialscontent', pathMatch: 'full' },
  { path: 'materialscontent', component: MaterialscontentComponent },
  { path: 'academiccontent', component: AcademiccontentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogingRoutingModule { }
