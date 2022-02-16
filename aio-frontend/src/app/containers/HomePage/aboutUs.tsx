import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
${tw`
w-full
flex
flex-wrap
items-center
justify-center
pt-4
pb-4
pl-7
pr-7
md:pl-0
md:pr-0
bg-white
`};
`;

const CarContainer = styled.div`
width: auto;
height: 15em;
margin-left: -50px;

img{
    width:auto;
    height: 100%;
}

@media (min-width: ${SCREENS.md}){
    height: 28em;
}
@media (min-width: ${SCREENS.lg}){
    height: 30em;
}
@media (min-width: ${SCREENS["2xl"]}){
    height: 35em;
    margin-left: 0;
}
`;

const InfoContainer = styled.div`
${tw`
md:w-1/2
flex
flex-col
md:ml-6
2xl:ml-16
`};
`;

const InfoTitle = styled.h2`
${tw`
text-black
text-2xl
md:text-5xl
font-extrabold
md:font-black
md:leading-normal
`};
`;

const InfoText = styled.p`
${tw`
md:max-w-2xl
text-sm
md:text-base
text-gray-500
mt-4
font-normal
`};
`;

export function AboutUs() {
    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={JeepImg} alt="" />
            </CarContainer>
            <InfoContainer>
                <InfoTitle>Feel The Best Experience With Our Rental Deals</InfoTitle>
                <InfoText>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod fugit totam, velit repudiandae facilis et similique quisquam
                    quo atque dolorem, vero possimus officia quas nulla libero, magnam eius. Ab, vero!
                    Accusantium ratione, dicta aperiam, esse similique, cupiditate perspiciatis
                    accusamus iusto sit mollitia nesciunt. Odio quo harum laudantium voluptas?
                    Quia consequatur labore obcaecati numquam at laboriosam magnam pariatur
                    eveniet maiores nobis! Vero possimus officia quas nulla libero, magnam eius. Ab, vero!
                    Accusantium ratione, dicta aperiam, esse similique, cupiditate perspiciatis
                    accusamus iusto sit mollitia nesciunt. Odio quo harum laudantium voluptas?
                    Quia consequatur labore obcaecati numquam at laboriosam magnam pariatur
                    eveniet maiores nobis!</InfoText>
            </InfoContainer>
        </AboutUsContainer >
    )
}