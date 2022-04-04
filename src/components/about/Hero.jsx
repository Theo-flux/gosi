import {Section, Div, Title, SubTitle} from "../../shared";
import aboutHero from "../../images/about/about-hero.png";
import dti from "../../images/footer/dti-logo.png";


function Hero() {
  return (
    <Section>
      <Div>
        <div className="pt-16">

          <div className="mb-16">
            <div className="flex mb-8 flex-col justify-center items-center">
              <Title className="mb-4 text-center">About Us</Title>
              <SubTitle className="text-center">Zobomap is your one stop shop for contextual data in West Africa.</SubTitle>
            </div>
            
            <figure className="rounded overflow-hidden">
              <img className="w-[100%] object-cover" src={aboutHero} alt="about-hero" />
            </figure>
          </div>

          <div className="flex flex-col justify-center items-center">
            <SubTitle className="text-center max-w-[640px] mb-4">It is a project of DTI and is intended to be a resource for development research and discussion across the West African sub region.</SubTitle>
            <figure className="">
              <img className="" src={dti} alt="dti-logo"/>
            </figure>
          </div>

        </div>
      </Div>
    </Section>
  );
}

export default Hero;