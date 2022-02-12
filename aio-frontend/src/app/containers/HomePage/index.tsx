import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
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

// * Aquí añade navbar, navbar a su vez añadió logo y logo añadió la propia imagen.
export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
    </PageContainer>
  );
}
