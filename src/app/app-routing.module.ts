import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cars',
    pathMatch: 'full',
  },
  {
    path: 'cars',
    loadChildren: () =>
      import('./modules/cars/cars.module').then((m) => m.CarsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
