import { Section, Div, Title, SubTitle, SmallText, ButtonWithIcon } from "../../shared"

function Publications(){
    
    return (
        <Section className="">
            <Div className="">
                <div className="">
                    <div className="">
                        <SmallText className="">OUR PUBLICATIONS</SmallText>
                        <Title className="">Zobomaps out in the fields</Title>
                        <SubTitle className="">Read up for updates on new features and user manuals</SubTitle>
                    </div>

                    <ButtonWithIcon>
                        Publication Hub
                        <i className="text-sm ri-arrow-right-circle-line"></i>
                    </ButtonWithIcon>
                </div>
            </Div>
        </Section>
    );
}

export default Publications;