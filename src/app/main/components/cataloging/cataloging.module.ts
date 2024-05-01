import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 // Import RouterModule
import { CatalogingRoutingModule } from './cataloging-routing.module'; // Import the routing module

import { ArticleComponent } from './components/materials/article/article.component';
import { BooksComponent } from './components/materials/books/books.component';
import { PeriodicalComponent } from './components/materials/periodical/periodical.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArticleComponent,
    BooksComponent,
    PeriodicalComponent,
  ],
  imports: [
    CommonModule,
    CatalogingRoutingModule,
    FormsModule
  ],
  // Other configurations...
})
export class CatalogingModule { }
