import { Section, Div, Title, Button, SubTitle } from "../../shared";

function Discover(){
    return(
        <Section className="">
            <Div className="py-16">
                <div className="font-gilmer flex flex-col justify-center items-center">
                    <small className="mb-8 text-neutral-500 font-bold text-sm">GETTING STARTED</small>
                    <Title className="text-center mb-4 w-full md:max-w-[650px]">Discover the story behind the data.</Title>
                    <SubTitle className="mb-8 text-center w-[full] md:max-w-[500px]">What looked like a small patch of purple grass, above five feet square, was moving across the sand </SubTitle>
                    <Button>Try Zobomap</Button>
                </div>
            </Div>
        </Section>
    );
}

export default Discover;