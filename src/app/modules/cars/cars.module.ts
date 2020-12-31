import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarsRoutingModule } from './cars-routing.module';
import { InitComponent } from './pages/init/init.component';
import { CreateComponent } from './pages/create/create.component';
import { CarsService } from './services/cars.service';

@NgModule({
  declarations: [InitComponent, CreateComponent],
  imports: [CommonModule, CarsRoutingModule, FormsModule],
  providers: [CarsService],
})
export class CarsModule {}
