import { Section, Div, Title, SubTitle, SmallText, ButtonWithIcon } from "../../shared"

function Publications(){
    
    return (
        <Section className="">
            <Div className="">
                <div className="grid grid-cols-1 grid-rows-3 gap-4 md:grid-cols-2 grid-rows-2 md:gap-8">
                {/* <div className="flex justify-between items-center"> */}
                    <div className="row-start-1 row-end-2 col-start-1 md:col-start-1 md:max-w-[489px]">
                        <SmallText className="">OUR PUBLICATIONS</SmallText>
                        <Title className="max-w-[462px] my-4">Zobomaps out in the fields</Title>
                        <SubTitle className="">Read up for updates on new features and user manuals</SubTitle>
                    </div>

                    <div className="row-start-3 row-end-4 justify-self-start md:row-start-1 md:row-end-2 md:col-start-2 md:justify-self-end self-center">
                        <ButtonWithIcon className="">
                            Publication Hub
                            <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                        </ButtonWithIcon>
                    </div>
                {/* </div> */}
                    <div className="row-start-2 row-end-3 md:col-start-1 md:col-span-2 md:row-start-2 md:row-span-2">
                        blocks
                    </div>
                </div>
            </Div>
        </Section>
    );
}

export default Publications;