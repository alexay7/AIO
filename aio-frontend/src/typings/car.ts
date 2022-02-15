// En este archivo se define la estructura de datos para "colocar" lo recibido por la api

export interface ICar {
  thumbnailSrc: string;
  name: string;
  mileage: string;
  gearType: string;
  dailyPrice: number;
  monthlyPrice: number;
  gas: string;
}
