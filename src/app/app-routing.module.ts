import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app-shell/blank/blank.module').then(module => module.BlankModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./app-shell/grid/grid.module').then(module => module.GridModule)
  },
  {
    path: 'grid-1',
    loadChildren: () => import('./app-shell/grid-1/grid-1.module').then(module => module.Grid1Module)
  },
  {
    path: 'master-detail',
    loadChildren: () => import('./app-shell/master-detail/master-detail.module').then(module => module.MasterDetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

