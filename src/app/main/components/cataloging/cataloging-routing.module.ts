import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './components/materials/books/books.component';
import { ArticleComponent } from './components/materials/article/article.component';
import { PeriodicalComponent } from './components/materials/periodical/periodical.component';
import { CahsComponent } from './components/academicproject/cahs/cahs.component';
import { CbaComponent } from './components/academicproject/cba/cba.component';
import { CcsComponent } from './components/academicproject/ccs/ccs.component';
import { CeasComponent } from './components/academicproject/ceas/ceas.component';
import { ChtmComponent } from './components/academicproject/chtm/chtm.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent},
  { path: 'article', component: ArticleComponent},
  { path: 'periodical', component: PeriodicalComponent},
  { path: 'cahs', component: CahsComponent},
  { path: 'cba', component: CbaComponent},
  { path: 'ccs', component: CcsComponent},
  { path: 'ceas', component: CeasComponent},
  { path: 'chtm', component: ChtmComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogingRoutingModule { }
