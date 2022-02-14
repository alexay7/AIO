/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCars
// ====================================================

export interface GetCars_cars {
  __typename: "CreateCarDto";
  id: string;
  name: string;
  mileage: string;
  geartype: string;
  gas: string;
  thumbnailSrc: string;
  dailyprice: number;
  monthlyprice: number;
}

export interface GetCars {
  cars: GetCars_cars[];
}
