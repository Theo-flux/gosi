import { Section, Div, Title, Button, SubTitle, SmallText } from "../../shared";
import { Link } from "react-router-dom";

function Discover(){
    return(
        <Section className="">
            <Div className="">
                <div className="font-gilmer flex flex-col justify-center items-center">
                    <SmallText className="">TRY ZOBOMAP</SmallText>
                    <Title className="text-center my-8 w-full md:max-w-[650px]">Discover the story behind the data.</Title>
                    <Link to="profiles/nigeria"><Button>Try Zobomap</Button></Link>
                </div>
            </Div>
        </Section>
    );
}

export default Discover;