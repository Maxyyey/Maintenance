import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule

import { CirculationRoutingModule } from './circulation-routing.module';
import { UploadPopupComponent } from './components/upload-popup/upload-popup.component';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';

@NgModule({
    declarations: [
        UploadPopupComponent,
        DeletePopupComponent
    ],
    imports: [
        CommonModule,
        CirculationRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule, // Add MatIconModule here
        MatButtonModule, // Add MatButtonModule here
    ]
})
export class AnnouncementModule {}
