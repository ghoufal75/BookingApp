import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes : Routes = [
  {path : '',loadChildren : ()=>import('./discover-list/discover-list.module').then(f=>f.DiscoverListPageModule)},
  {path : ':id',loadChildren : ()=>import('./discover-detail/discover-detail.module').then(f=>f.DiscoverDetailPageModule)}
]


@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports :[RouterModule],
})
export class DiscoverRoutingModule{}
