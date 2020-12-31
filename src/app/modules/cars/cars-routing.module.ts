import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './pages/init/init.component';
import { CreateComponent } from './pages/create/create.component';

const routes: Routes = [
  {
    path: '',
    component: InitComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsRoutingModule {}
