import { Section, Div, Title, SubTitle, SmallText, ButtonWithIcon } from "../../shared";


import pubImage1 from "../../images/home/publication_1.png";
import pubImage2 from "../../images/home/publication_2.png";
import pubImage3 from "../../images/home/publication_3.png";

const publications = [
    {
        id: "1",
        image: pubImage1,
        source: "cjid.com",
        data: "Type in the name or address of a place. Type in the name or address of a place. Type in the name or address of a place."
    },

    {
        id: "2",
        image: pubImage2,
        source: "cjid.com",
        data: "Type in the name or address of a place. Type in the name or address of a place. Type in the name or address of a place."
    },

    {
        id: "3",
        image: pubImage3,
        source: "cjid.com",
        data: "Type in the name or address of a place. Type in the name or address of a place. Type in the name or address of a place."
    }
];

const PublicationCard = ({pubData}) => {
    const {id, image, source, data} = pubData
    return(
        <div className="bg-white overflow-hidden rounded-md">
            <figure className="mb-8">
                <img className="w-[100%] rounded-md" src={image} alt={`publication-${id}`} />
            </figure>

            <div className="font-gilmer">
                <div className="mb-4 text-primary-900 text-lg font-bold lg:text-xl">
                    <p className="">{source}</p>
                </div>

                <p className="text-neutral-700 text-sm lg:text-base">{data}</p>
            </div>
        </div>
    );
}



function Publications(){
    
    return (
        <Section className="">
            <Div className="">
                <div className="grid grid-cols-1 grid-rows-[minmax(0,200px)_minmax(0,_1fr)] gap-4 md:grid-cols-2 grid-rows-[minmax(0,200px)_minmax(0,_1fr)] md:gap-8">
               
                    <div className="row-start-1 row-end-2 col-start-1 justify-self-start self-center md:col-start-1 md:max-w-[489px]">
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
               
                    <div className="grid grid-cols-1 row-start-2 row-end-3 mb-4 md:grid-cols-3 gap-8 col-start-1 md:col-span-2 md:row-start-2 md:row-span-2">
                        {
                            publications.map((publication) => {
                                return(
                                    <PublicationCard key={publication.id} pubData={publication} />
                                );
                            })
                        }
                    </div>
                </div>
            </Div>
        </Section>
    );

}

export default Publications;