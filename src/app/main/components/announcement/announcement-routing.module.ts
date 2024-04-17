import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddNewPopupComponent } from './components/addnew-popup/addnew-popup.component';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';

const routes: Routes = [
  { path: '', redirectTo: 'addnew-popup', pathMatch: 'full' },
  { path: 'addnew-popup', component: AddNewPopupComponent },
  { path: '', redirectTo: 'delete-popup', pathMatch: 'full'},
  { path: 'delete-popup' , component: DeletePopupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementRoutingModule { }
