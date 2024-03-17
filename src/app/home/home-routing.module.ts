import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children : [
     {path : "booking",loadChildren : ()=>import('../booking/booking.module').then(f=>f.BookingModule)},
     {path : "discover",loadChildren : ()=>import('../discover/discover.module').then(f=>f.DiscoverModule)},
     {path : '',redirectTo:'discover',pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
