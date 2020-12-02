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
    path: 'seite2',
    loadChildren: () => import('./seite2/seite2.module').then( m => m.Seite2PageModule)
  },
  {
    path: 'seite3',
    loadChildren: () => import('./seite3/seite3.module').then( m => m.Seite3PageModule)
  },
  {
    path: 'seite4',
    loadChildren: () => import('./seite4/seite4.module').then( m => m.Seite4PageModule)
  },
  {
    path: 'seite5',
    loadChildren: () => import('./seite5/seite5.module').then( m => m.Seite5PageModule)
  },
  {
    path: 'seite6',
    loadChildren: () => import('./seite6/seite6.module').then( m => m.Seite6PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
