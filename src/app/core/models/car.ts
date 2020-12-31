export class Car {
  Modelo: String;
  Anno: number;
  Cilindraje: number;
  marca: String;
  tipoVehiculoNombre: String;
  tipoVehiculoDescripcion: String;
}

export class CarRequest {
  Modelo: String;
  Anno: number;
  Cilindraje: number;
  codigoMarca: String;
  codigoTipo: String;
}

export class Tipos {
  Id: number;
  Codigo: String;
  Nombre: String;
  Descripcion: String;
}

export class Marcas {
  Id: number;
  Codigo: String;
  Nombre: String;
}
