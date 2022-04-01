import { Section, Div, Title, SubTitle } from "../../shared";
import ngMapDesktop from "../../images/publication/ng-map-desktop.png";
import ngMapMobile from "../../images/publication/ng-map-mobile.png";
import { useMediaQuery } from "react-responsive";

function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Section className="h-[490px] md:h-[450px]" 
        style={{
            backgroundImage: `url(${isMobile ? ngMapMobile:ngMapDesktop })`,
            backgroundPosition: 'center',
            backgroundSize: `${isMobile ? '85%' :'contain'}`,
            backgroundRepeat: 'no-repeat',
            backgroundBlendMode: 'darken',
            backgroundColor: '#FCFEFF',
        }}
    >
        <Div className="">
            <div className="flex py-32 font-gilmer flex-col justify-center items-center">
                <Title className="mb-4 md:mb-8">Publication Hub</Title>
                <SubTitle className="text-center text-neutral-700 w-full max-w-[582px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus eget nisl feugiat sed. Eu odio amet ut imperdiet molestie pulvinar. </SubTitle>
            </div>
        </Div>
    </Section>
  )
}

export default  Hero;
