import React from "react";
import { Section, Div, Title, SubTitle } from "../../shared";
import Search from "../Search.jsx";

function Hero(){
    return(
        <Section className="h-[100%]" style={{backgroundColor: "linear-gradient(180deg, #FFFFFF 0%, rgba(232, 232, 232, 0) 100%)"}}>
            <Div className="py-48 w-11/12 mx-auto">
                <div className="flex flex-col justify-center items-center mb-16">
                    <Title className="text-center max-w-[886px] mb-8">Discover amazing data about your country</Title>
                    <SubTitle className="text-neutral-700 text-center w-[350px] md:max-w-[750px]">Explore using our interactive map, important information and data about your nation, region or locality.</SubTitle>
                </div>
                <Search/>
                <div className="text-primary-600 font-gilmer font-medium text-sm flex justify-between items-center w-[160px] mx-auto mt-8 cursor-pointer">
                    use current location  <i className="ri-compass-3-fill"></i>
                </div>
            </Div>
        </Section>
    );
}

export default Hero;