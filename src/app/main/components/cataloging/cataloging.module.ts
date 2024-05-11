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

@NgModule({
  declarations: [
    ArticleComponent,
    BooksComponent,
    PeriodicalComponent,
    MaterialscontentComponent,
    AcademiccontentComponent,
  ],
  imports: [
    CommonModule,
    CatalogingRoutingModule,
    FormsModule
  ],
  // Other configurations...
})
export class CatalogingModule { }
