import React from "react";
import { Section, Title, SubTitle } from "../../shared";
import Search from "../Search";
import LeafletContainer from "../../container/LeafletContainer";
import { locationLevels } from "../../utils/constants";

function Hero() {
  return (
    <Section
      className="h-[80%]"
      style={{
        backgroundColor:
          "linear-gradient(180deg, #FFFFFF 0%, rgba(232, 232, 232, 0) 100%)",
      }}
    >
      <div className="mx-auto w-11/12 max-w-7xl pt-36 pb-16">
        <div className="flex flex-col justify-center items-center mb-16">
          <Title className="text-center w-full mb-8 md:max-w-[886px]">
            Socioeconomic data about Nigeria at your fingertips
          </Title>
          <SubTitle className="text-neutral-700 text-center w-full md:max-w-[750px]">
            Explore using our interactive map, important information and data
            about your nation, region or locality.
          </SubTitle>
        </div>
        <Search className="w-full" />
        {/* <div className="text-primary-600 font-gilmer font-medium text-sm flex justify-between items-center w-[160px] mx-auto mt-8 cursor-pointer">
          use current location <i className="ri-compass-3-fill"></i>
        </div> */}
        <div className="w-full h-[478px] lg:h-[700px] pt-16 xl:pt-20">
          <LeafletContainer locationLevel={locationLevels.home} />
        </div>
      </div>
    </Section>
  );
}

export default Hero;
