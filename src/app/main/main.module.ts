import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ADMIN MAIN COMPONENTS
import { MainRoutingModule } from './main-routing.module';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { PersonnelSetupComponent } from './components/personnelsetup/personnelsetup.component';
import { CirculationComponent } from './components/circulation/circulation.component';
import { CatalogingComponent } from './components/cataloging/cataloging.component';
import { HistoryComponent  } from './components/addlocker/history/history.component';
import { UserComponent } from './components/addlocker/user/user.component';
import { AddUserComponent } from './components/personnelsetup/adduser/adduser.component';
import { UploadComponent } from './components/circulation/upload/upload.component';
import { AddComponent } from './components/announcement/add/add.component';
import { BooksComponent } from './components/cataloging/materials/books/books.component';
import { ArticleComponent } from './components/cataloging/materials/article/article.component';
import { PeriodicalComponent } from './components/cataloging/materials/periodical/periodical.component';
import { CcsComponent } from './components/cataloging/academicproject/ccs/ccs.component';
import { CbaComponent } from './components/cataloging/academicproject/cba/cba.component';
import { CahsComponent } from './components/cataloging/academicproject/cahs/cahs.component';
import { ChtmComponent } from './components/cataloging/academicproject/chtm/chtm.component';
import { CeasComponent } from './components/cataloging/academicproject/ceas/ceas.component';

@NgModule({
  declarations: [
    InventoryComponent,
    AnnouncementComponent,
    PersonnelSetupComponent,
    CirculationComponent,
    CatalogingComponent,
    HistoryComponent,
    UserComponent,
    AddUserComponent,
    UploadComponent,
    AddComponent,
    BooksComponent,
    ArticleComponent,
    PeriodicalComponent,
    CcsComponent,
    CbaComponent,
    CahsComponent,
    ChtmComponent,
    CeasComponent,

  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
