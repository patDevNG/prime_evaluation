import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagingComponent } from './components/paging/paging.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { HomeComponent } from './components/home/home.component';
import { FilteringComponent } from './components/filtering/filtering.component';
import { EditingComponent } from './components/editing/editing.component';
import { NavComponent } from './components/nav/nav.component';
import { IgxGridModule } from 'igniteui-angular';
@NgModule({
  declarations: [
    AppComponent,
    PagingComponent,
    SortingComponent,
    HomeComponent,
    FilteringComponent,
    EditingComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
