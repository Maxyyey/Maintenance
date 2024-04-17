import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddNewPopupComponent } from './components/addnew-popup/addnew-popup.component';

const routes: Routes = [
  { path: '', redirectTo: 'addnew-popup', pathMatch: 'full' },
  { path: 'addnew-popup', component: AddNewPopupComponent },
  // Add other routes if needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementRoutingModule { }
