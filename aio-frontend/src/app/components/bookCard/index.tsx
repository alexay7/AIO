import { faCalendarAlt, faCaretDown, faCaretUp, faSortNumericUpAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Marginer } from "../marginer";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SCREENS } from "../responsive";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
flex
justify-center
items-center
rounded-md
bg-white
pt-1
pb-1
pr-2
pl-2
md:pt-2
md:pb-2
md:pl-9
md:pr-9
`};
`;

const ItemContainer = styled.div`
  ${tw`
flex
relative
cursor-pointer
`}
`;

const Icon = styled.span`
  ${tw`
  text-red-500
  fill-current
  text-xs
  md:text-base
  mr-1
  md:mr-3
  user-select[none]
  `};
`;

const SmallIcon = styled.span`
${tw`
text-gray-700
fill-current
text-xs
md:text-base
ml-1
user-select[none]
`};
`;

const Name = styled.span`
  ${tw`
text-gray-600
text-xs
md:text-sm
user-select[none]
`};
`;

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
bg-gray-300
mr-2
ml-2
md:mr-5
md:ml-5
`}
`;

const DateCalendar = styled(Calendar) <{ offset?: boolean }>`
  position: absolute;
  max-width: none;
  top: 4em;
  left: 0;

    ${({ offset }) => offset && css`
    left:-7em;
    `}

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left:-2em;
  }
`;

// TODO: Cerrar calendario cuando se haga click fuera de él
export function BookCard() {
  // *Asignar States a un componente
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen) {
      setReturnCalendarOpen(false);
    }
  };

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) {
      setStartCalendarOpen(false);
    }
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon onClick={toggleStartDateCalendar}>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon >
        <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>
        <SmallIcon onClick={toggleStartDateCalendar}>
          <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretDown : faCaretUp} />
        </SmallIcon>
        {isStartCalendarOpen && <DateCalendar value={startDate} onChange={setStartDate} />}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon onClick={toggleReturnDateCalendar}>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
        <SmallIcon onClick={toggleReturnDateCalendar}>
          <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretDown : faCaretUp} />
        </SmallIcon>
        {isReturnCalendarOpen && <DateCalendar value={returnDate} onChange={setReturnDate} offset={true} />}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
}
