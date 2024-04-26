import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './components/materials/books/books.component';
import { ArticleComponent } from './components/materials/article/article.component';
import { PeriodicalComponent } from './components/materials/periodical/periodical.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent},
  { path: 'article', component: ArticleComponent},
  { path: 'periodical', component: PeriodicalComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogingRoutingModule { }
