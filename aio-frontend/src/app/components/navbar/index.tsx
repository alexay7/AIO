import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navitems";

const NavbarContainer = styled.nav`
  min-height: 68px;
  ${tw`
      w-full
      max-w-screen-2xl //Para pantallas grandes
      flex
      flex-row
      items-center
      lg:pl-12 //Media query para tailwind
      lg:pr-12
      justify-between
  `};
`;

const LogoContainer = styled.div``;

export function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
}
