import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { AboutUs } from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
import { TopCars } from "./topCars";
// import { TopCars } from "./topCars";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
    `}
`;

// TODO: hacer que PageContainer sea tipo plantilla (que todas las páginas tengan navbar y footer)
export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      {/* Aquí añade navbar, navbar a su vez añadió logo y logo añadió la propia imagen. */}
      <TopSection />
      <Marginer direction="vertical" margin="8em" />
      <BookCard />
      <Marginer direction="vertical" margin="8em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="8em" />
      <AboutUs />
      <Marginer direction="vertical" margin="8em" />
      <TopCars />
      <Footer />
    </PageContainer>
  );
}