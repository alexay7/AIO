import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
background-color: #1d2124;
${tw`
flex
flex-col
h-full
min-w-full
pt-8
md:pt-16
items-center
justify-center
`};
`;

const InnerContainer = styled.div`
${tw`
flex
flex-wrap
max-w-screen-2xl
h-full
w-full
justify-between
`};
`;

const AboutContainer = styled.div`
${tw`
flex
flex-col
mr-2
md:mr-16
pl-10
pr-10
md:pl-3
md:pr-3
`};
`;

const AboutText = styled.p`
${tw`
text-white
text-sm
font-normal
mt-2
max-w-xs
leading-5
`}
`;

const SectionContainer = styled.div`
${tw`
w-full
md:w-auto
flex
flex-col
mr-2
md:mr-24
pl-10
pr-10
mt-4
mb-2
md:m-0
md:mb-0
`};
`;

const LinksList = styled.ul`
${tw`
list-none
outline-none
flex
flex-col
`};
`;

const ListItem = styled.li`

${tw`
mb-3
`};

&>a{
    ${tw`
        text-sm
        text-white
        hover:text-gray-400
        transition-all
    `};
}
`;

const HeaderTitle = styled.h3`
${tw`
text-2xl
font-bold
text-white
mb-3
`};
`;

const HorContainer = styled.div`
${tw`
flex
items-center
`}
;`

const RedIcon = styled.span`
${tw`
w-7
h-7
rounded-full
flex
items-center
justify-center
bg-red-500
text-white
text-base
mr-2
`};
`;

const SmallText = styled.h6`
${tw`
text-sm
text-white
`};
`;

const BottomContainer = styled.div`
${tw`
flex
w-full
max-w-screen-2xl
justify-center
md:justify-start
mt-7
md:mt-1
`};
`;


const CopyrightText = styled.div`
font-size: 13px;
${tw`
text-gray-300
`};
`;

export function Footer() {
    return (
        <FooterContainer>
            <InnerContainer>
                <AboutContainer>
                    <Logo color="white" bgColor="dark" />
                    <AboutText>Yourcar is a Car renting an selling company located in many
                        countries across the world which has hight quality cars and top
                        rated services</AboutText>
                </AboutContainer>
                <SectionContainer>
                    <HeaderTitle>Links</HeaderTitle>
                    <LinksList>
                        <ListItem><a href="/">Home</a></ListItem>
                        <ListItem><a href="/">Cars</a></ListItem>
                        <ListItem><a href="/">Services</a></ListItem>
                        <ListItem><a href="/">Blog</a></ListItem>
                    </LinksList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Other Links</HeaderTitle>
                    <LinksList>
                        <ListItem><a href="/">FAQ</a></ListItem>
                        <ListItem><a href="/">Contact Us</a></ListItem>
                        <ListItem><a href="/">Support</a></ListItem>
                        <ListItem><a href="/">Privacy Policy</a></ListItem>
                        <ListItem><a href="/">Terms &amp; Conditions</a></ListItem>
                    </LinksList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Call Now</HeaderTitle>
                    <HorContainer>
                        <RedIcon><FontAwesomeIcon icon={faPhoneAlt} /></RedIcon>
                        <SmallText>+91 555-234-8467</SmallText>
                    </HorContainer>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Email Us</HeaderTitle>
                    <HorContainer>
                        <RedIcon><FontAwesomeIcon icon={faEnvelope} /></RedIcon>
                        <SmallText><a href="mailto:info@yourcar.com">info@yourcar.com</a></SmallText>
                    </HorContainer>
                </SectionContainer>
            </InnerContainer>
            <BottomContainer>
                <CopyrightText>Copyright &copy; {new Date().getFullYear()} Yourcar. All rights reserved</CopyrightText>
            </BottomContainer>
        </FooterContainer>
    )
}