import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { AddPersonnelComponent } from "./add-personnel/add-personnel.component"
import { EditPersonnelComponent } from "./edit-personnel/edit-personnel.component"
import { ReactiveFormsModule } from "@angular/forms"
import { MaterialModule } from "@app/modules/material/material.module"

@NgModule({
     declarations: [AddPersonnelComponent, EditPersonnelComponent],
     imports: [CommonModule, ReactiveFormsModule, MaterialModule],
})

export class PersonnelSetupModule {}