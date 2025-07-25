import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { MatButtonModule } from "@angular/material/button"
import { MatTableModule } from "@angular/material/table"
import { MatIconModule } from "@angular/material/icon"
import { MatDividerModule } from "@angular/material/divider"
import { MatDialogModule } from "@angular/material/dialog"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatCardModule } from "@angular/material/card"
import { MatPaginatorModule } from "@angular/material/paginator"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { MatToolbar, MatToolbarModule } from "@angular/material/toolbar"
import { MatCheckboxModule } from "@angular/material/checkbox"
import { MatMenuModule } from "@angular/material/menu"
import { MatInputModule } from '@angular/material/input';

// Insert material imports here
const MatModules = [
     CommonModule,
     MatButtonModule,
     MatTableModule,
     MatIconModule,
     MatDividerModule,
     MatDialogModule,
     MatFormFieldModule,
     MatCardModule,
     MatPaginatorModule,
     MatFormFieldModule,
     MatCardModule,
     MatProgressSpinnerModule,
     MatToolbarModule,
     MatMenuModule,
     MatCheckboxModule,
     MatInputModule
]

@NgModule({
     declarations: [],
     imports: [MatModules],
     exports: [MatModules],
})
export class MaterialModule {}
