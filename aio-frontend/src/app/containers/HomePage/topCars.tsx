import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import CarsService from "../services/car.service"

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

interface ICarouselProps {
  Cars?: ICar[],
  Length?: number
}

function ControlledCarousel(props: ICarouselProps) {
  const [current, setCurrent] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

  const cars = props.Cars;
  let slides: JSX.Element[] = []

  cars?.forEach(car => {
    slides.push(<Car {...car} />)
  });
  const numberOfDots = isMobile ? props.Length : Math.ceil(props.Length || 1 / 3);
  // TODO: sustituir esto por un carousel que permita cambiar de página y no de uno en uno
  return (
    <CarsContainer>
      <Carousel
        value={current}
        onChange={setCurrent}
        slides={slides}
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
  );
}

type Props = {};
class TopCars extends React.Component<any, any> {
  constructor(props: Props) {
    super(props);
    this.getCars = this.getCars.bind(this);
    this.state = {
      cars: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  getCars() {
    CarsService.getAll()
      .then((response: any) => {
        let cars: ICar[] = []
        response.data.forEach((car: { name: any; mileage: any; thumbnailSrc: any; dailyprice: any; monthlyprice: any; geartype: any; gas: any; }) => {
          const newCar: ICar = {
            name: car.name,
            mileage: car.mileage,
            thumbnailSrc:
              car.thumbnailSrc,
            dailyPrice: car.dailyprice,
            monthlyPrice: car.monthlyprice,
            gearType: car.geartype,
            gas: car.gas,
          };
          cars.push(newCar)
        });
        this.setState({
          cars: cars,
        });
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  componentDidMount() {
    this.getCars();
  }

  render() {
    // TODO: sustituir esto por un carousel que permita cambiar de página y no de uno en uno
    return (
      <TopCarsContainer>
        <Title>Explore Our Top Deals</Title>
        <ControlledCarousel Cars={this.state.cars} Length={this.state.cars.length} />
      </TopCarsContainer>
    );
  }
}

export default TopCars