import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablecommponentComponent } from './tablecommponent/tablecommponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule,MatToolbarModule } from '@angular/material'
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { BodyComponent } from './body/body.component';
import { MatDividerModule } from '@angular/material';
import { CourseListComponent } from './course-list/course-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TablecommponentComponent,
    BodyComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
