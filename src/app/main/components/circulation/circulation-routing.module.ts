import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploadPopupComponent } from './components/upload-popup/upload-popup.component';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';


const routes: Routes = [
  { path: '', redirectTo: 'upload-popup', pathMatch: 'full' },
  { path: 'upload-popup', component: UploadPopupComponent },
  { path: '', redirectTo: 'delete-popup', pathMatch: 'full'},
  { path: 'delete-popup' , component: DeletePopupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CirculationRoutingModule { }
