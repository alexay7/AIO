import React, { Dispatch, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import { setTopCars } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import axios, { AxiosResponse } from "axios";
import { createSelector } from "reselect";
import { makeSelectTopCars } from "./selectors";
import MoonLoader from "react-spinners/MoonLoader"

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
`};
`;

const Title = styled.h2`
  ${tw`
text-3xl
lg:text-5xl
flex
text-black
font-extrabold
`};
`;

const CarsContainer = styled.div`
  ${tw`
w-full
flex
flex-wrap
justify-center
mt-7
md:mt-10
`};
`;

const LoadingContainer = styled.div`
  ${tw`
  mt-7
w-full
flex
items-center
justify-center
text-base
font-black
`};
`;

const actionDispatch = (dispatch: Dispatch<any>) => ({
  setTopCars: (cars: ICar[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars
}));

export function TopCars() {
  const [current, setCurrent] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

  const { topCars } = useSelector(stateSelector)
  const { setTopCars } = actionDispatch(useDispatch());

  const fetchTopCars = async () => {
    setLoading(true);
    await new Promise(f => setTimeout(f, 5000));
    await axios.get<ICar[]>('http://localhost:9000/car').then((response: AxiosResponse) => {
      const cars = response.data
      if (cars) {
        setTopCars(cars);
        setLoading(false);
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  const cars = topCars.map((car) => <Car {...car} />)

  // Sirve para pasar una función que se ejecute al pasar algo que se define en el array del segundo argumento.
  // Si no se pone nada se activa cuando el componente se actualiza, si se pone un hook se activará cuando cambie el valor.
  useEffect(() => {
    fetchTopCars();
  }, []);

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length || 1 / 3);
  // TODO: sustituir esto por un carousel que permita cambiar de página y no de uno en uno
  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      {isLoading && (
        <LoadingContainer>
          <MoonLoader loading size={20} />
        </LoadingContainer>
      )}
      {!isLoading && (
        <CarsContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={cars}
            plugins={[
              "clickToChange",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          />
          <Dots value={current} onChange={setCurrent} number={numberOfDots} />
        </CarsContainer>
      )}
    </TopCarsContainer>
  );
}