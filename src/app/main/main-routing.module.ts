import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementComponent } from './components/announcement/announcement.component';

const routes: Routes = [
  { path: '', redirectTo: 'announcement', pathMatch: 'full' },
  { 
    path: 'announcement', 
    component: AnnouncementComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/announcement/announcement.module').then(m => m.AnnouncementModule)
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
