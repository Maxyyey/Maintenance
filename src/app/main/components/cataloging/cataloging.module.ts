import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 // Import RouterModule
import { CatalogingRoutingModule } from './cataloging-routing.module'; // Import the routing module

import { ArticleComponent } from './components/materials/article/article.component';
import { BooksComponent } from './components/materials/books/books.component';
import { PeriodicalComponent } from './components/materials/periodical/periodical.component';
import { FormsModule } from '@angular/forms';
import { MaterialscontentComponent } from './components/materials/materialscontent/materialscontent.component';
import { AcademiccontentComponent } from './components/academicproject/academiccontent/academiccontent.component';
import { AddiconComponent } from './components/materials/materialscontent/addicon/addicon.component';
import { AddiconacadComponent } from './components/academicproject/academiccontent/addiconacad/addiconacad.component';

@NgModule({
  declarations: [
    ArticleComponent,
    BooksComponent,
    PeriodicalComponent,
    MaterialscontentComponent,
    AcademiccontentComponent,
    AddiconComponent,
    AddiconacadComponent,
  ],
  imports: [
    CommonModule,
    CatalogingRoutingModule,
    FormsModule
  ],
  // Other configurations...
})
export class CatalogingModule { }
