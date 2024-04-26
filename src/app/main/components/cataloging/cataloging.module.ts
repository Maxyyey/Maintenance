import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 // Import RouterModule
import { CatalogingRoutingModule } from './cataloging-routing.module'; // Import the routing module

import { ArticleComponent } from './components/materials/article/article.component';
import { BooksComponent } from './components/materials/books/books.component';
import { PeriodicalComponent } from './components/materials/periodical/periodical.component';

@NgModule({
  declarations: [
    ArticleComponent,
    BooksComponent,
    PeriodicalComponent
  ],
  imports: [
    CommonModule,
    CatalogingRoutingModule // Include the routing module here
  ],
  // Other configurations...
})
export class CatalogingModule { }
