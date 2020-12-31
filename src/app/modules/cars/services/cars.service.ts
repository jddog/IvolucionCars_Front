import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private http: HttpClient) {}

  getCars(): Promise<any> {
    return this.http
      .get<any>('https://localhost:44333/api/cars/ObtenerVehiculos')
      .toPromise();
  }

  getTipos(): Promise<any> {
    return this.http
      .get<any>('https://localhost:44333/api/cars/ObtenerTiposVehiculos')
      .toPromise();
  }

  getMarcas(): Promise<any> {
    return this.http
      .get<any>('https://localhost:44333/api/cars/ObtenerMarcasVehiculos')
      .toPromise();
  }

  postCar(body): Promise<any> {
    return this.http
      .post('https://localhost:44333/api/cars/RegistrarVehiculo', body)
      .toPromise();
  }
}
