import { gql } from "@apollo/client";

// Aquí se define las acciones exactas que hará graphql para hacer las operaciones

export const GET_ALL_CARS = gql`
query GetCars{
    cars{
        id
        name
        mileage
        geartype
        gas
        thumbnailSrc
        dailyprice
        monthlyprice
    }
}
`;