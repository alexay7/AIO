// En este archivo se define la estructura de datos para "colocar" lo recibido por la api

export interface ICar {
  thumbnailSrc: string;
  name: string;
  mileage: string;
  geartype: string;
  dailyprice: number;
  monthlyprice: number;
  gas: string;
}
