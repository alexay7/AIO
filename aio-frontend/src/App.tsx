import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "./App.css";
import HomePage from "./app/containers/HomePage";

// *Crea el contenedor con los detalles de la página
const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;

// *En el contenedor de arriba introduce el HomePage declarado en app/containers con exports
function App() {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}

export default App;
