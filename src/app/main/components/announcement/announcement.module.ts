import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule

import { AnnouncementRoutingModule } from './announcement-routing.module';
import { AddNewPopupComponent } from './components/addnew-popup/addnew-popup.component';

@NgModule({
    declarations: [
        AddNewPopupComponent,
    ],
    imports: [
        CommonModule,
        AnnouncementRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule, // Add MatIconModule here
        MatButtonModule, // Add MatButtonModule here
    ]
})
export class AnnouncementModule {}
