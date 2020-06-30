import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { PagingComponent } from './components/paging/paging.component';
import { FilteringComponent } from './components/filtering/filtering.component';
import { EditingComponent } from './components/editing/editing.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'sorting', component:SortingComponent},
  {path:'paging', component:PagingComponent},
  {path:'filtering', component:FilteringComponent},
  {path:'editing', component:EditingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
