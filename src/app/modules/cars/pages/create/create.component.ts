import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Marcas, Tipos, CarRequest } from '.././../../../core/models/car';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  carModel: CarRequest;
  tiposVehiculo: Tipos[];
  marcasVehiculo: Marcas[];
  messaggeSuccess: string;
  messaggeDanger: string;

  constructor(private _CarsService: CarsService) {}

  ngOnInit(): void {
    this.limpiarModelo();
    this.obtenetTiposCars();
    this.obtenetMarcasCars();
  }

  obtenetTiposCars() {
    this._CarsService.getTipos().then((resp) => {
      this.tiposVehiculo = resp;
    });
  }

  obtenetMarcasCars() {
    this._CarsService.getMarcas().then((resp) => {
      this.marcasVehiculo = resp;
    });
  }

  limpiarModelo() {
    this.carModel = {
      Modelo: '',
      Anno: 0,
      Cilindraje: 0,
      codigoMarca: 'AUDI',
      codigoTipo: 'VEHI',
    };
  }

  registrarVehiculo() {
    if (
      !this.carModel.Modelo ||
      this.carModel.Cilindraje === 0 ||
      this.carModel.Anno === 0
    ) {
      this.messaggeDanger =
        'Por favor verificar que se diligenciaron todos los campos';
    } else {
      this._CarsService.postCar(this.carModel).then((resp) => {
        this.limpiarModelo();
        this.messaggeSuccess = resp;
      });
    }
  }

  hiddeAlert() {
    this.messaggeDanger = '';
    this.messaggeSuccess = '';
  }
}
