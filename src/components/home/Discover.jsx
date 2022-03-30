import { Section, Div, Title, Button, SubTitle, SmallText } from "../../shared";

function Discover(){
    return(
        <Section className="">
            <Div className="">
                <div className="font-gilmer flex flex-col justify-center items-center">
                    <SmallText className="mb-8">GETTING STARTED</SmallText>
                    <Title className="text-center mb-4 w-full md:max-w-[650px]">Discover the story behind the data.</Title>
                    <SubTitle className="mb-8 text-center w-[full] md:max-w-[500px]">What looked like a small patch of purple grass, above five feet square, was moving across the sand </SubTitle>
                    <Button>Try Zobomap</Button>
                </div>
            </Div>
        </Section>
    );
}

export default Discover;