import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'discover-list',
    loadChildren: () => import('./discover/discover-list/discover-list.module').then( m => m.DiscoverListPageModule)
  },
  {
    path: 'discover-detail',
    loadChildren: () => import('./discover/discover-detail/discover-detail.module').then( m => m.DiscoverDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
