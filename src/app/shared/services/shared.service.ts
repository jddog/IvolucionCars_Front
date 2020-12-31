import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SharedService {
  constructor(private http: HttpClient) {}

  getHourNow(): Promise<string> {
    return this.http
      .get<any>('https://localhost:44333/api/Utils/ObtenerHoraActual')
      .toPromise();
  }
}
