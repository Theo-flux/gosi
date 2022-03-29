import React from "react";
import { Section, Div, Title, SubTitle } from "../../shared";

function Hero(){
    return(
        <Section className="h-[100vh]" style={{'background': 'linear-gradient(180deg, #FFFFFF 0%, rgba(232, 232, 232, 0) 100%)'}}>
            <Div className="py-48">
                <div className="flex flex-col justify-center items-center">
                    <Title className="text-center max-w-[886px] mb-8">Discover amazing data about your country</Title>
                    <SubTitle className="text-neutral-700 text-center max-w-[750px]">Explore using our interactive map, important information and data about your nation, region or locality.</SubTitle>
                </div>
            </Div>
        </Section>
    );
}

export default Hero;