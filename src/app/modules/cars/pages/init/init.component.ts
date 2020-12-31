import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Car } from '.././../../../core/models/car';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss'],
})
export class InitComponent implements OnInit {
  cars: Car[];
  constructor(private _CarsService: CarsService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this._CarsService.getCars().then((resp) => {
      this.cars = resp;
    });
  }
}
