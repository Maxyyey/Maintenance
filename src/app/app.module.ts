import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { LogoutPopupComponent } from './components/logout-popup/logout-popup.component';

// ADMIN MAIN PAGES WHEN THEY LOGIN
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';

import { MaterialModule } from './modules/material/material.module';
import { ViewcbaComponent } from './viewcba/viewcba.component';
import { EditcbapopupComponent } from './editcbapopup/editcbapopup.component';
import { ArchivecbapopupComponent } from './archivecbapopup/archivecbapopup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutPopupComponent,
    MainComponent,
    ViewcbaComponent,
    EditcbapopupComponent,
    ArchivecbapopupComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MaterialModule,

  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class FormFieldOverviewExample {}
