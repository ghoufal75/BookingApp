import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes : Routes = [
  {path : '',loadChildren : ()=>import('./booking-list/booking-list.module').then(f=>f.BookingListPageModule)},
  {path : ':id',loadChildren : ()=>import('./booking-detail/booking-detail.module').then(f=>f.BookingDetailPageModule)}
]


@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports :[RouterModule],
})
export class BookingRoutingModule{}
